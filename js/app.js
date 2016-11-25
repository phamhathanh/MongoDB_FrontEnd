var map;
$('form').submit(false);
var backEndUrl = "http://localhost:4567/"

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    google.maps.event.addListener(map, "rightclick", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        if (confirm('Do you want to insert new restaurant on location ?')) {
            openToAdd(lat,lng);
        }
    });
}

function openToAdd(lat,lng) {
        $("#group-update").css("display","none");
        $("#group-add").css("display","block");
        $("#name").val("");
        $("#building").val("");
        $('#building').attr('readonly', false);
        $("#street").val("");
        $('#street').attr('readonly', false);
        $("#zipcode").val("");
        $('#zipcode').attr('readonly', false);
        $("#borough").val("");
        $('#borough').attr('readonly', false);
        $("#cuisine").val("");
        $('#table-rating').css("display","none");
        
        $("#button_add").click(function() {
                addRestaurant(lat,lng);
            });
    

        $('a[href="#tab_detail"]').tab('show')
}

function addRestaurant(lat,lng) {
    if (confirm('Do you want to insert new restaurant ?')) {
        var url = backEndUrl + "restaurants/";

        var data={};  
        data.address = {
            "building" : $("#building").val(),
            "coord" : [lng,lat],
            "street" : $("#street").val(),
            "zipcode" : $("#zipcode").val(),
        }
        data.borough = $("#borough").val();
        data.cuisine = $("#cuisine").val();
        data.name = $("#name").val();

        data = JSON.stringify(data);
        var options = {
            url: url,
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data:data
        };

        $.ajax(options).done(function (response) {
            alert("Inserted.");
        });
        return;
    }
}

var markers = [];

function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
      
function clearMarkers() {
        setMapOnAll(null);
      }

function addMarker(map, restaurantsData) {
    clearMarkers();
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    restaurantsData.forEach(function (obj) {

        var myLatlng = new google.maps.LatLng(obj.address.coord[1], obj.address.coord[0]);
        bounds.extend(myLatlng);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: obj.name
        });

        var content = "<h4>Restaurant Info</h4><hr/><br/>"
        content += "<p><b>Name </b>: " + obj.name + "</p>"
        content += "<p><b>Address</b>: Building " + obj.address.building + " - Street:" + obj.address.street + "</p>"
        marker.info = new google.maps.InfoWindow({
            content: content
        });

        marker.addListener('click', function () {
            marker.info.open(map, marker);
        });

        markers.push(marker);
    });
    setMapOnAll(map);
    map.fitBounds(bounds);
}

function getData() {
    var url = backEndUrl + "restaurants";
    var options = {
        url: url,
        method: "GET"        
    };
    $.ajax(options).done(function (response) {
        addMarker(map, data);
    });
}

function viewResult(data) {
    var arr = [];
    data.forEach(function (res) {
        var address = res.address.building + res.address.street;
        var result = [res._id.$oid,res.name, address, res.cuisine]
        arr.push(result);
    })
    var table = $('#table_results').DataTable({
        data: arr,
        'destroy': true,
        "autoWidth": false,
        'columnDefs': [
            {
                'targets': -1,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row) {
                    return "<button onclick=getDetail('"+row[0]+"')>View</button>"
                }
            }
        ]
    });
    table.column( 0 ).visible( false );
}

function viewResult1(data) {
    var arr = [];
    data.forEach(function (res) {
        var address = res.address.building + res.address.street;
        var result = [res._id.$oid,res.name, address, res.cuisine]
        arr.push(result);
    })
    var table = $('#table_results').DataTable({
        data: arr,
        'destroy': true,
        "autoWidth": false,
        'columnDefs': [
            {
                'targets': -1,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row) {
                    return "<button onclick=getDetail('"+row[0]+"')>View</button>"
                }
            }
        ]
    });
    table.column( 0 ).visible( false );
}

function getDetail(id) {
    var url = backEndUrl + "restaurants/" + id;

    var options = {
        url: url,
        method: "GET"
    };

    $.ajax(options).done(function (response) {
        fillDataToDetail(response)
    });
}

function fillDataToDetail(data,forAdd) {
  
        $("#group-update").css("display","block");
        $("#group-add").css("display","none");
        $("#name").val(data.name);
        $("#building").val(data.address.building);
        $('#building').attr('readonly', true);
        $("#street").val(data.address.street);
        $('#street').attr('readonly', true);
        $("#zipcode").val(data.address.zipcode);
        $('#zipcode').attr('readonly', true);
        $("#borough").val(data.borough);
        $('#borough').attr('readonly', true);
        $("#cuisine").val(data.cuisine);
        $('#table-rating').css("display","block");
        var arr = [];
        data.ratings.forEach(function (res) {
            var result = [res.date,res.score];
            arr.push(result);
        })
        var arr1 = [];
        for (var res in data.fields) {
            if (data.fields.hasOwnProperty) {
                var result1 = [res,data.fields[res]]
                arr1.push(result1);
            }
        }
            
        var table = $('#table-rating').DataTable({
            data: arr,
            'destroy': true,
            "autoWidth": false,
            "paging": false,
            "ordering": false,
            "searching": false
        });
        var table1 = $('#table-field').DataTable({
            data: arr1,
            'destroy': true,
            "autoWidth": false,
            "paging": false,
            "ordering": false,
            "searching": false
        });

        $("#button_field").click(function() {
                addField(data._id.$oid,$("#key").val(),$("#value").val());
            });
        $("#button_update").click(function() {
                updateRes(data._id.$oid,$("#name").val(),$("#cuisine").val());
            });
        $("#button_delete").click(function() {
            deleteRes(data._id.$oid);
        });

        $('a[href="#tab_detail"]').tab('show')
    
}

function addField(id,key,value) {
    var url = backEndUrl + "restaurants/" + id +"/fields/" + key;

    data = {};
    data.value = value;
    data = JSON.stringify(data);
        var options = {
            url: url,
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            data:data
        };

        $.ajax(options).done(function (response) {
            alert("Field added.");
        });
}

function deleteRes(id) {

        var url = backEndUrl + "restaurants/" + id;

        var options = {
            url: url,
            method: "Delete",
            headers: { 'Content-Type': 'application/json' }
        };

        $.ajax(options).done(function (response) {
            alert("Deleted.");
        });
   
    
}

function updateRes(id,name,cuisine) {
    if (confirm('Do you want to update ?')) {
        var url = backEndUrl + "restaurants/" + id;

        var data={};
        data.name = name;
        data.cuisine = cuisine;
        data = JSON.stringify(data);
        var options = {
            url: url,
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            data:data
        };

        $.ajax(options).done(function (response) {
            alert("Updated.");
        });
    }
}

$('#inputSearchBox').keypress(function (e) {
    if (e.which == 13) {

        searchQuery = $('#inputSearchBox').val();

        var url = backEndUrl + "restaurants?query=" + searchQuery;

        var options = {
            url: url,
            method: "GET",
            
        };
        $.ajax(options).done(function (response) {
            addMarker(map, response);
            viewResult(response);
        });
    }
});

//viewResult()

$('#click').click(function () {
    $("#leftSide").animate({ width: 'toggle' }, 500);
});