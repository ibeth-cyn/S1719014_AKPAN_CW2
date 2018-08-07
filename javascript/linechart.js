//generic function to load API from source
function load(url){
    var read= $.ajax({
        url: url,
        async: false,
        success: function(){
        }
    }).responseText;
    return read;
}
//loading the API for enrollment rates in mauritius
var enrollment_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/SE.TER.ENRL?date=2009:2015&format=json");

var en_mur= JSON.parse(enrollment_mur)[1];

//declaring empty array to store the values parsed from the API
var data_mur= [];
var label_mur= [];

//a loop that runs through the JSON file and gets the specific values needed to display the charts
for(var i=0; i<en_mur.length; i++){
    data_mur[i] = en_mur[i].value;
    label_mur[i]= en_mur[i].date;
}

//drawing charts for mauritius
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label_mur,
        datasets: [{
            label: 'Tertiary education enrollment rate from 2009-2015',
            data: data_mur,
            backgroundColor:'rgba(6,3,26,0.8)',
            borderColor: 'rgba(6,3,26,0.8)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//loading the API for enrollment rates in nigeria
var enrollment_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/SE.TER.ENRL?date=2009:2015&format=json");

var en_ng= JSON.parse(enrollment_ng)[1];

//declaring empty array to store the values parsed from the API
var data_ng=[];
var label_ng=[];

//a loop that runs through the JSON file and gets the specific values needed to display the charts
for(var i=0; i<en_ng.length; i++){
    data_ng[i] = en_ng[i].value;
    label_ng[i]= en_ng[i].date;
}

//drawing charts for nigeria
var ctx1 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: label_ng,
        datasets: [{
            label: 'Tertiary education enrollment rate from 2009-2015',
            data: data_ng,
            backgroundColor:'rgba(6,3,26,0.8)',
            borderColor: 'rgba(6,3,26,0.8)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//loading the API for enrollment rates in the uk
var enrollment_uk = load("http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015&format=json");

var en_uk= JSON.parse(enrollment_uk)[1];

//declaring empty array to store the values parsed from the API
var data_uk=[];
var label_uk=[];

//a loop that runs through the JSON file and gets the specific values needed to display the charts
for(var i=0; i<en_uk.length; i++){
    data_uk[i] = en_uk[i].value;
    label_uk[i]= en_uk[i].date;
}

//drawing charts for the uk
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: label_uk,
        datasets: [{
            label: 'Tertiary education enrollment rate from 2009-2015',
            data: data_uk,
            backgroundColor:'rgba(6,3,26,0.8)',
            borderColor: 'rgba(6,3,26,0.8)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});