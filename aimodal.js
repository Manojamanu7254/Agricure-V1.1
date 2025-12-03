// 🍅 Tomato Disease Identifier – Beautiful Detailed Output Version

document.getElementById('imageUpload').addEventListener('change', function () {
    const fileInput = document.getElementById('imageUpload');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Choose a file';
    const fileNameLabel = document.getElementById('fileName');
    fileNameLabel.textContent = fileName;
    fileNameLabel.style.transition = "all 0.3s ease";
    fileNameLabel.style.color = "#007bff";
    fileNameLabel.style.fontWeight = "600";
    setTimeout(() => (fileNameLabel.style.color = "#333"), 1000);
});

const imageInfo = {

    // 1) Bacterial Spot
    "6a56a429-b241.JPG": {
        additionalImage1: "PROJECT VALID\\tamato bactrial spot 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato bactrial spot 2.JPG",
        diseaseName: "Tomato Bacterial Spot",
        scientificName: "Xanthomonas campestris pv. vesicatoria",
        description: "A destructive bacterial disease causing dark, water-soaked lesions that turn brown and necrotic.",
        symptoms: [
            "Small brown water-soaked leaf spots",
            "Yellow halos around lesions",
            "Leaf margin drying and curling"
        ],
        effects: "Reduces photosynthesis and causes premature leaf drop.",
        spread: "Rain splash, wind, contaminated tools, infected seeds.",
        prevention: "Use disease-free seeds, avoid overhead watering, and apply copper sprays.",
        environmentalConditions: "Thrives in warm, humid climates.",
        managementTips: [
            "Remove infected leaves",
            "Improve air circulation",
            "Use copper-based bactericides"
        ]
    },

    // 2) Early Blight / Alternaria
    "6bde0aa8-4093.JPG": {
        additionalImage1: "PROJECT VALID\\tamato early bright 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato early bright 2.JPG",
        diseaseName: "Early Blight",
        scientificName: "Alternaria solani",
        description: "A fungal disease forming characteristic concentric brown target-like spots.",
        symptoms: [
            "Circular brown lesions with rings",
            "Yellowing around spots",
            "Premature leaf drop"
        ],
        effects: "Weakens the plant and reduces fruit yield.",
        spread: "Wind, rain splash, and infected debris.",
        prevention: "Use resistant varieties and avoid overhead irrigation.",
        environmentalConditions: "Warm (24–29°C), humid conditions.",
        managementTips: [
            "Apply preventive fungicides",
            "Rotate crops yearly",
            "Remove infected debris"
        ]
    },

    // 3) Septoria Leaf Spot (based on tiny peppered spots)
    "6c9e726b-8574.JPG": {
        additionalImage1: "PROJECT VALID\\tamato septoria 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato septoria 2.JPG",
        diseaseName: "Septoria Leaf Spot",
        scientificName: "Septoria lycopersici",
        description: "A fungal disease causing many small brown circular spots across the leaf surface.",
        symptoms: [
            "Numerous tiny dark-brown spots",
            "Yellowing between lesions",
            "Lower leaves affected first"
        ],
        effects: "Severe defoliation and reduced plant vigor.",
        spread: "Rain splash, wind, contaminated debris.",
        prevention: "Do not wet foliage, sanitize garden tools.",
        environmentalConditions: "Moist and humid environments.",
        managementTips: [
            "Use fungicides like chlorothalonil",
            "Remove lower infected leaves",
            "Mulch to prevent soil splash"
        ]
    },

    // 4) Leaf Mold (filename includes L.Mold)
    "95a5ac3d-50d3-426c-83a6-3fd47fc8c58b___Crnl_L.Mold 6609_180deg.JPG": {
        additionalImage1: "PROJECT VALID\\leaf mold 1.JPG",
        additionalImage2: "PROJECT VALID\\leaf mold 2.JPG",
        diseaseName: "Tomato Leaf Mold",
        scientificName: "Fulvia fulva",
        description: "Fungal disease forming yellow patches on top and olive-green mold on the underside.",
        symptoms: [
            "Yellow irregular spots",
            "Olive green velvety mold underside",
            "Leaf curling and drying"
        ],
        effects: "Reduces photosynthesis and weakens plants.",
        spread: "Airborne spores in humid greenhouses.",
        prevention: "Increase ventilation and avoid overcrowding.",
        environmentalConditions: "High humidity over 85%.",
        managementTips: [
            "Apply sulfur or copper fungicides",
            "Prune lower leaves",
            "Improve airflow"
        ]
    },

    // 5) Early Blight (you already added earlier)
    "95de9f94-ddb1-4303-b3d9-.JPG": {
        additionalImage1: "PROJECT VALID\\tamato early bright 5.JPG",
        additionalImage2: "PROJECT VALID\\tamato early bright 6.JPG",
        diseaseName: "Tomato Early Blight",
        scientificName: "Alternaria solani",
        description: "Fungal disease with characteristic target-like brown lesions.",
        symptoms: [
            "Brown circular spots with rings",
            "Leaf yellowing",
            "Stem lesions and fruit rot"
        ],
        effects: "Reduces foliage and yield.",
        spread: "Windborne spores and debris.",
        prevention: "Use resistant varieties and fungicides.",
        environmentalConditions: "Warm, moist climates.",
        managementTips: [
            "Increase spacing",
            "Remove infected leaves",
            "Spray preventive fungicides"
        ]
    },

    // 6) Possibly Leaf Mold (yellow patches + edge browning)
    "0114f7b3-7f56-4bef-aa47-.JPG": {
        additionalImage1: "PROJECT VALID\\leaf mold 3.JPG",
        additionalImage2: "PROJECT VALID\\leaf mold 4.JPG",
        diseaseName: "Tomato Leaf Mold",
        scientificName: "Fulvia fulva",
        description: "A yellow-patch disease with velvety mold underneath leaves.",
        symptoms: [
            "Yellow blotches",
            "Brown necrotic edges",
            "Velvety fungal growth beneath"
        ],
        effects: "Heavy foliage loss under high humidity.",
        spread: "Airborne spores.",
        prevention: "Reduce humidity and improve airflow.",
        environmentalConditions: "Humidity > 85%, low light.",
        managementTips: [
            "Use fungicides",
            "Avoid overhead irrigation",
            "Prune densely packed leaves"
        ]
    },

    // 7) Leaf Mold (filename contains L.Mold)
    "150f6844-796d-4960-b42b-629f25806bfb___Crnl_L.Mold 7096_flipTB.JPG": {
        additionalImage1: "PROJECT VALID\\leaf mold 5.JPG",
        additionalImage2: "PROJECT VALID\\leaf mold 6.JPG",
        diseaseName: "Tomato Leaf Mold",
        scientificName: "Fulvia fulva",
        description: "A common fungal infection in humid cultivation areas.",
        symptoms: [
            "Yellowing between veins",
            "Olive mold underside",
            "Leaf drying from edges inward"
        ],
        effects: "Reduces plant vigor drastically.",
        spread: "Spores via wind, humidity, and poor ventilation.",
        prevention: "Use resistant hybrids and reduce humidity.",
        environmentalConditions: "Humid greenhouses or crowded fields.",
        managementTips: [
            "Copper or sulfur sprays",
            "Ventilation improvement",
            "Remove infected foliage"
        ]
    },

    // 8) Leaf Mold
    "269f3e0a-4d4f-4598-b19d-9f5428342464___Crnl_L.Mold 8745_180deg.JPG": {
        additionalImage1: "PROJECT VALID\\leaf mold 7.JPG",
        additionalImage2: "PROJECT VALID\\leaf mold 8.JPG",
        diseaseName: "Tomato Leaf Mold",
        scientificName: "Fulvia fulva",
        description: "Fungal disease producing yellow patches that turn brown.",
        symptoms: [
            "Yellow irregular lesions",
            "Gray or olive mold underside",
            "Leaf curling"
        ],
        effects: "Progressive leaf drop and poor fruiting.",
        spread: "Humidity-driven fungal spores.",
        prevention: "Improve airflow and reduce moisture.",
        environmentalConditions: "High humidity and low ventilation.",
        managementTips: [
            "Apply fungicides",
            "Prune infected leaves",
            "Maintain spacing"
        ]
    },

    // 9) Early Blight or Septoria mix
    "893b7469-eb50-4567-9292-.JPG": {
        additionalImage1: "PROJECT VALID\\septoria early 1.JPG",
        additionalImage2: "PROJECT VALID\\septoria early 2.JPG",
        diseaseName: "Septoria Leaf Spot (with Early Blight overlap)",
        scientificName: "Septoria lycopersici",
        description: "A fungal infection that causes many small dark spots, often confused with early blight.",
        symptoms: [
            "Tiny black-brown lesions",
            "Yellow patches forming between spots",
            "Lower leaves most affected"
        ],
        effects: "Reduces leaf area and fruit production.",
        spread: "Spores spread via rain and contaminated soil.",
        prevention: "Sanitation and preventive fungicides.",
        environmentalConditions: "Warm, wet conditions.",
        managementTips: [
            "Remove infected leaves",
            "Avoid wetting leaves",
            "Apply chlorothalonil or mancozeb"
        ]
    },

    // 10) Late Blight (your existing one)
    "_GHLB2 Leaf 8633_flipLR.JPG": {
        additionalImage1: "PROJECT VALID\\tamato late bright 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato late bright 2.JPG",
        diseaseName: "Tomato Late Blight",
        scientificName: "Phytophthora infestans",
        description: "A rapidly spreading disease causing dark water-soaked patches and white growth under humidity.",
        symptoms: [
            "Dark grayish-black lesions",
            "White mold under leaves",
            "Rapid leaf collapse"
        ],
        effects: "Kills plants within days during rainy season.",
        spread: "Airborne spores, wind, rain splash.",
        prevention: "Apply protective fungicides and destroy infected plants.",
        environmentalConditions: "Cool, humid environment.",
        managementTips: [
            "Improve drainage",
            "Avoid evening irrigation",
            "Use resistant varieties"
        ]
    }

};


// 🌿 Main Function
function getImageInfo() {
    const imageUpload = document.getElementById("imageUpload").files[0];
    const infoBox = document.getElementById("info");
    const spinner = document.getElementById("loadingSpinner");
    const preview = document.getElementById("uploadedImagePreview");
    const add1 = document.getElementById("additionalImage1");
    const add2 = document.getElementById("additionalImage2");

    if (!imageUpload) {
        infoBox.innerHTML = `<p style="color:#d9534f;font-weight:600;">⚠️ Please upload an image first.</p>`;
        return;
    }

    spinner.style.display = 'block';
    spinner.style.animation = "spin 1s linear infinite";
    preview.style.display = add1.style.display = add2.style.display = 'none';
    infoBox.innerHTML = '';

    setTimeout(() => {
        const info = imageInfo[imageUpload.name];

        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            preview.style.transition = "opacity 0.6s ease";
            preview.style.opacity = "1";
            preview.style.borderRadius = "15px";
            preview.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
        };
        reader.readAsDataURL(imageUpload);

        if (info) {
            infoBox.innerHTML = `
                <div style="
                    background:linear-gradient(135deg,#e3f2fd,#f9f9ff);
                    padding:25px;
                    border-radius:15px;
                    box-shadow:0 4px 20px rgba(0,0,0,0.1);
                    font-family:Segoe UI, sans-serif;
                    line-height:1.6;
                    ">
                    <h2 style="color:#0069d9;">🌾 Disease: ${info.diseaseName}</h2>
                    <p><b>Scientific Name:</b> <i>${info.scientificName}</i></p>
                    <p><b>Description:</b> ${info.description}</p>
                    <h3 style="color:#007bff;">🧬 Symptoms:</h3>
                    <ul>${info.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
                    <p><b>Effects:</b> ${info.effects}</p>
                    <p><b>Spread:</b> ${info.spread}</p>
                    <p><b>Environmental Conditions:</b> ${info.environmentalConditions}</p>
                    <h3 style="color:#28a745;">🛡️ Prevention & Management:</h3>
                    <ul>${info.managementTips.map(t => `<li>${t}</li>`).join('')}</ul>
                    <p><b>General Prevention:</b> ${info.prevention}</p>
                </div>
            `;
            add1.src = info.additionalImage1;
            add2.src = info.additionalImage2;
            add1.style.display = add2.style.display = 'block';
            add1.style.borderRadius = add2.style.borderRadius = '12px';
            add1.style.boxShadow = add2.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            infoBox.innerHTML = `<p style="color:#d9534f;font-weight:600;">❌ Unrecognized image. Please try again.</p>`;
        }

        spinner.style.display = 'none';
    }, 2500 + Math.random() * 1500);
}

// 🌾 Spinner animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}
`;
document.head.appendChild(style);
