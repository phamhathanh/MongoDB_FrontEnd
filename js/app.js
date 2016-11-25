var map;
$('form').submit(false);
var mockData = [{
    "_id": {
        "$oid": "58087607b65f662461362dc0"
    },
    "address": {
        "building": "1007",
        "coord": [
            -73.856077,
            40.848447
        ],
        "street": "Morris Park Ave",
        "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "Bakery",
    "grades": [
        {
            "date": "2014-03-03 00:00:00 UTC",
            "grade": "A",
            "score": 2
        },
        {
            "date": "2013-09-11 00:00:00 UTC",
            "grade": "A",
            "score": 6
        },
        {
            "date": "2013-01-24 00:00:00 UTC",
            "grade": "A",
            "score": 10
        },
        {
            "date": "2011-11-23 00:00:00 UTC",
            "grade": "A",
            "score": 9
        },
        {
            "date": "2011-03-10 00:00:00 UTC",
            "grade": "B",
            "score": 14
        }
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
    },
    {
        "_id": {
            "$oid": "58087607b65f662461362dc1"
        },
        "address": {
            "building": "2780",
            "coord": [
                -73.98241999999999,
                40.579505
            ],
            "street": "Stillwell Avenue",
            "zipcode": "11224"
        },
        "borough": "Brooklyn",
        "cuisine": "American ",
        "grades": [
            {
                "date": "2014-06-10 00:00:00 UTC",
                "grade": "A",
                "score": 5
            },
            {
                "date": "2013-06-05 00:00:00 UTC",
                "grade": "A",
                "score": 7
            },
            {
                "date": "2012-04-13 00:00:00 UTC",
                "grade": "A",
                "score": 12
            },
            {
                "date": "2011-10-12 00:00:00 UTC",
                "grade": "A",
                "score": 12
            }
        ],
        "name": "Riviera Caterer",
        "restaurant_id": "40356018"
    },
    {
        "_id": {
            "$oid": "58087607b65f662461362dc2"
        },
        "address": {
            "building": "469",
            "coord": [
                -73.961704,
                40.662942
            ],
            "street": "Flatbush Avenue",
            "zipcode": "11225"
        },
        "borough": "Brooklyn",
        "cuisine": "Hamburgers",
        "grades": [
            {
                "date": "2014-12-30 00:00:00 UTC",
                "grade": "A",
                "score": 8
            },
            {
                "date": "2014-07-01 00:00:00 UTC",
                "grade": "B",
                "score": 23
            },
            {
                "date": "2013-04-30 00:00:00 UTC",
                "grade": "A",
                "score": 12
            },
            {
                "date": "2012-05-08 00:00:00 UTC",
                "grade": "A",
                "score": 12
            }
        ],
        "name": "Wendy'S",
        "restaurant_id": "30112340"
    },
    {
        "_id": {
            "$oid": "58087607b65f662461362dc3"
        },
        "address": {
            "building": "97-22",
            "coord": [
                -73.8601152,
                40.7311739
            ],
            "street": "63 Road",
            "zipcode": "11374"
        },
        "borough": "Queens",
        "cuisine": "Jewish/Kosher",
        "grades": [
            {
                "date": "2014-11-24 00:00:00 UTC",
                "grade": "Z",
                "score": 20
            },
            {
                "date": "2013-01-17 00:00:00 UTC",
                "grade": "A",
                "score": 13
            },
            {
                "date": "2012-08-02 00:00:00 UTC",
                "grade": "A",
                "score": 13
            },
            {
                "date": "2011-12-15 00:00:00 UTC",
                "grade": "B",
                "score": 25
            }
        ],
        "name": "Tov Kosher Kitchen",
        "restaurant_id": "40356068"
    },
    {
        "_id": {
            "$oid": "58087607b65f662461362dc4"
        },
        "address": {
            "building": "8825",
            "coord": [
                -73.8803827,
                40.7643124
            ],
            "street": "Astoria Boulevard",
            "zipcode": "11369"
        },
        "borough": "Queens",
        "cuisine": "American ",
        "grades": [
            {
                "date": "2014-11-15 00:00:00 UTC",
                "grade": "Z",
                "score": 38
            },
            {
                "date": "2014-05-02 00:00:00 UTC",
                "grade": "A",
                "score": 10
            },
            {
                "date": "2013-03-02 00:00:00 UTC",
                "grade": "A",
                "score": 7
            },
            {
                "date": "2012-02-10 00:00:00 UTC",
                "grade": "A",
                "score": 13
            }
        ],
        "name": "Brunos On The Boulevard",
        "restaurant_id": "40356151"
    },
    {
        "_id": {
            "$oid": "58087607b65f662461362dc5"
        },
        "address": {
            "building": "7114",
            "coord": [
                -73.9068506,
                40.6199034
            ],
            "street": "Avenue U",
            "zipcode": "11234"
        },
        "borough": "Brooklyn",
        "cuisine": "Delicatessen",
        "grades": [
            {
                "date": "2014-05-29 00:00:00 UTC",
                "grade": "A",
                "score": 10
            },
            {
                "date": "2014-01-14 00:00:00 UTC",
                "grade": "A",
                "score": 10
            },
            {
                "date": "2013-08-03 00:00:00 UTC",
                "grade": "A",
                "score": 8
            },
            {
                "date": "2012-07-18 00:00:00 UTC",
                "grade": "A",
                "score": 10
            },
            {
                "date": "2012-03-09 00:00:00 UTC",
                "grade": "A",
                "score": 13
            },
            {
                "date": "2011-10-14 00:00:00 UTC",
                "grade": "A",
                "score": 9
            }
        ],
        "name": "Wilken'S Fine Food",
        "restaurant_id": "40356483"
    }]

var backEndUrl = "http://10.10.159.174:4567/"

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

    //addMarker(map, mockData);
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
        console.log(data);
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

        console.log(options)
        $.ajax(options).done(function (response) {
            console.log(response);
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