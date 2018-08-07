function load(url){
    var read= $.ajax({
        url: url,
        async: false,
        success: function(){
        }
    }).responseText;
    return read;
}

//loading the data for 2015 enrollment rates in the different majors in 2015 for mauritius
var it_comms_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F600?date=2015&format=json");
var education_mur= load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F140?date=2015&format=json");
var natural_sciences_mur= load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F500?date=2015&format=json");
var engineering_mur= load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F700?date=2015&format=json");
var arts_mur= load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F200?date=2015&format=json");
var unspecified_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.FUK?date=2015&format=json");
var business_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F400?date=2015&format=json");
var agriculture_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F800?date=2015&format=json");
var social_construct_mur = load("http://api.worldbank.org/v2/countries/MUS/indicators/UIS.FOSEP.56.F300?date=2015&format=json");

var it_mur= JSON.parse(it_comms_mur)[1];
var edu_mur= JSON.parse(education_mur)[1];
var nat_mur= JSON.parse(natural_sciences_mur)[1];
var eng_mur= JSON.parse(engineering_mur)[1];
var arts_mur= JSON.parse(arts_mur)[1];
var un_mur= JSON.parse(unspecified_mur)[1];
var bus_mur= JSON.parse(business_mur)[1];
var agr_mur= JSON.parse(agriculture_mur)[1];
var soc_mur= JSON.parse(social_construct_mur)[1];

var itm_ur = it_mur[0].value;
var edum_ur = edu_mur[0].value;
var natm_ur = nat_mur[0].value;
var engm_ur = eng_mur[0].value;
var artsm_ur = arts_mur[0].value;
var unm_ur = un_mur[0].value;
var busm_ur = bus_mur[0].value;
var agrm_ur = agr_mur[0].value;
var socm_ur = soc_mur[0].value;

var en_mur= [itm_ur, edum_ur, natm_ur, engm_ur, artsm_ur, unm_ur, busm_ur, agrm_ur, socm_ur];

var data_mur = [];

for(var i=0; i<en_mur.length; i++){
    data_mur[i] = en_mur[i];
}

var ctx = document.getElementById("myChartI");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["IT", "Education", "Natural Sci", "Engineering", "Arts", "Unspecified", "Business", "Agriculture", "Social Sci"],
        datasets: [{
            label: 'Enrollment rate in several majors in 2015',
            data: data_mur,      
            backgroundColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(244, 232, 193, 1)',
                'rgba(160, 193, 185, 1)',
                'rgba(112, 160, 175, 1)',
                'rgba(112, 105, 147, 1)',
                'rgba(131, 34, 50, 0.9)',
                'rgba(206, 137, 100, 1)',
                'rgba(255, 159, 28, 1)',
                'rgba(206, 195, 193, 1)'
            ],
            borderColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)'
            ],
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

//loading the data for 2015 enrollment rates in the different majors in 2015 for nigeria
var it_comms_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F600?date=2015&format=json");
var education_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F140?date=2015&format=json");
var natural_sciences_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F500?date=2015&format=json");
var engineering_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F700?date=2015&format=json");
var arts_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F400?date=2015&format=json");
var unspecified_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.FUK?date=2015&format=json");
var business_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F400?date=2015&format=json");
var agriculture_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F800?date=2015&format=json");
var social_construct_ng = load("http://api.worldbank.org/v2/countries/NGA/indicators/UIS.FOSEP.56.F300?date=2015&format=json");

var it_ng= JSON.parse(it_comms_ng)[1];
var edu_ng= JSON.parse(education_ng)[1];
var nat_ng= JSON.parse(natural_sciences_ng)[1];
var eng_ng= JSON.parse(engineering_ng)[1];
var arts_ng= JSON.parse(arts_ng)[1];
var un_ng= JSON.parse(unspecified_ng)[1];
var bus_ng= JSON.parse(business_ng)[1];
var agr_ng= JSON.parse(agriculture_ng)[1];
var soc_ng= JSON.parse(social_construct_ng)[1];

var itn_g = it_ng[0].value;
var edn_g = edu_ng[0].value;
var natn_g = nat_ng[0].value;
var engn_g = eng_ng[0].value;
var artsn_g = arts_ng[0].value;
var unn_g = un_ng[0].value;
var busn_g = bus_ng[0].value;
var agrn_g = agr_ng[0].value;
var socn_g = soc_ng[0].value;

var eng_ng= [itn_g, edn_g, natn_g, engn_g, artsn_g, unn_g, busn_g, agrn_g, socn_g];
var data_ng = [];

for(var i=0; i<eng_ng.length; i++){
    data_ng[i] = eng_ng[i];
}

var ctx1 = document.getElementById("myChartII");
var myChart2 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["IT", "Education", "Natural Sci", "Engineering", "Arts", "Unspecified", "Business", "Agriculture", "Social Sci"],
        datasets: [{
            label: 'Enrollment rate in several majors in 2015',
            data: data_ng,      
            backgroundColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(244, 232, 193, 1)',
                'rgba(160, 193, 185, 1)',
                'rgba(112, 160, 175, 1)',
                'rgba(112, 105, 147, 1)',
                'rgba(131, 34, 50, 0.9)',
                'rgba(206, 137, 100, 1)',
                'rgba(255, 159, 28, 1)',
                'rgba(206, 195, 193, 1)'
            ],
            borderColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)'
            ],
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

//loading the data for 2015 enrollment rates in the different majors in 2015 for the uk
var it_comms_uk = load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F600?date=2015&format=json");
var education_uk= load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F140?date=2015&format=json");
var natural_sciences_uk= load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F500?date=2015&format=json");
var engineering_uk= load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F700?date=2015&format=json");
var arts_uk= load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F200?date=2015&format=json");
var unspecified_uk = load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.FUK?date=2015&format=json");
var business_uk = load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F400?date=2015&format=json");
var agriculture_uk = load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F800?date=2015&format=json");
var social_construct_uk = load("http://api.worldbank.org/v2/countries/GHA/indicators/UIS.FOSEP.56.F300?date=2015&format=json");

var it_uk= JSON.parse(it_comms_uk)[1];
var edu_uk= JSON.parse(education_uk)[1];
var nat_uk= JSON.parse(natural_sciences_uk)[1];
var eng_uk= JSON.parse(engineering_uk)[1];
var arts_uk= JSON.parse(arts_uk)[1];
var un_uk= JSON.parse(unspecified_uk)[1];
var bus_uk= JSON.parse(business_uk)[1];
var agr_uk= JSON.parse(agriculture_uk)[1];
var soc_uk= JSON.parse(social_construct_uk)[1];

var itu_k = it_uk[0].value;
var eduu_k = edu_uk[0].value;
var natu_k = nat_uk[0].value;
var engu_k = eng_uk[0].value;
var artsu_k = arts_uk[0].value;
var unu_k = un_uk[0].value;
var busu_k = bus_uk[0].value;
var agru_k = agr_uk[0].value;
var socu_k = soc_uk[0].value;

var en_uk= [itu_k, eduu_k, natu_k, engu_k, artsu_k, unu_k, busu_k, agru_k, socu_k];

var data_uk = [];

for(var i=0; i<en_uk.length; i++){
    data_uk[i] = en_uk[i];
}

var ctx2 = document.getElementById("myChartIII");
var myChart3 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["IT", "Education", "Natural Sci", "Engineering", "Arts", "Unspecified", "Business", "Agriculture", "Social Sci"],
        datasets: [{
            label: 'Enrollment rate in several majors in 2015',
            data: data_uk,      
            backgroundColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(244, 232, 193, 1)',
                'rgba(160, 193, 185, 1)',
                'rgba(112, 160, 175, 1)',
                'rgba(112, 105, 147, 1)',
                'rgba(131, 34, 50, 0.9)',
                'rgba(206, 137, 100, 1)',
                'rgba(255, 159, 28, 1)',
                'rgba(206, 195, 193, 1)'
            ],
            borderColor: [
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)',
                'rgba(6, 3, 26, 0.8)'
            ],
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

