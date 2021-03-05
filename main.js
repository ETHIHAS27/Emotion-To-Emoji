Webcam.set({
width: 350,
height: 300,
image_format: 'png',
image_quality: 90
})

camera = document.getElementById('camera');



console.log("ml5",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVWsz1pEQ/model.json",modelloded);

function modelloded(){
    console.log("modellodded")
}Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id = 'capture_image' src = "+data_uri+">"
    })
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data_1 = "The First Prediction is" + prediction_1
    var speak_data_2 = "The Second Prediction is" + prediction_2
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}

function predict(){
    img = document.getElementById('capture_image');

    classifier.classify(img, gotresults);
}


function gotresults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML = results[0].label
        document.getElementById('result_emotion_name2').innerHTML = results[1].label
        prediction_1 =  results[0].label
        prediction_2 =  results[1].label
        speak()

        if(prediction_1 == 'Happy'){
            document.getElementById("update_emoji").innerHTML = '&#128522;'
        }
       if(prediction_1 == 'Laughing'){
        document.getElementById('update_emoji').innerHTML = '&#128512;'
       }
       if(prediction_1 == 'Sad'){
           document.getElementById('update_emoji').innerHTML = '&#128532;'
       }
       if(prediction_1 == 'crying'){
           document.getElementById('update_emoji').innerHTML = '&#128546;'
       }
       if(prediction_1 == 'Angry'){
           document.getElementById('update_emoji').innerHTML = '&#128545;'
       }
       if(prediction_1 == 'Disspaonted'){
           document.getElementById('update_emoji').innerHTML = '&#128548;'
       }





       if(prediction_2 == 'Happy'){
        document.getElementById("update_emoji_2").innerHTML = '&#128522;'
    }
   if(prediction_2 == 'Laughing'){
    document.getElementById('update_emoji_2').innerHTML = '&#128512;'
   }
   if(prediction_2 == 'Sad'){
       document.getElementById('update_emoji_2').innerHTML = '&#128532;'
   }
   if(prediction_2 == 'crying'){
       document.getElementById('update_emoji_2').innerHTML = '&#128546;'
   }
   if(prediction_2 == 'Angry'){
       document.getElementById('update_emoji_2').innerHTML = '&#128545;'
   }
   if(prediction_2 == 'Disspaonted'){
       document.getElementById('update_emoji_2').innerHTML = '&#128548;'
   }
    }
}