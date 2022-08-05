// https://calculator.swiftutors.com/laser-power-density-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const laserPowerDensityRadio = document.getElementById('laserPowerDensityRadio');
const diameterofLaserBeamRadio = document.getElementById('diameterofLaserBeamRadio');
const powerofLaserBeamRadio = document.getElementById('powerofLaserBeamRadio');

let laserPowerDensity;
let diameterofLaserBeam = v1;
let powerofLaserBeam = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

laserPowerDensityRadio.addEventListener('click', function() {
  variable1.textContent = 'Diameter of Laser Beam (mm)';
  variable2.textContent = 'Power of Laser Beam (W)';
  diameterofLaserBeam = v1;
  powerofLaserBeam = v2;
  result.textContent = '';
});

diameterofLaserBeamRadio.addEventListener('click', function() {
  variable1.textContent = '(LPD) Laser Power Density (W/cm²)';
  variable2.textContent = 'Power of Laser Beam (W)';
  laserPowerDensity = v1;
  powerofLaserBeam = v2;
  result.textContent = '';
});

powerofLaserBeamRadio.addEventListener('click', function() {
  variable1.textContent = '(LPD) Laser Power Density (W/cm²)';
  variable2.textContent = 'Diameter of Laser Beam (mm)';
  laserPowerDensity = v1;
  diameterofLaserBeam = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(laserPowerDensityRadio.checked)
    result.textContent = `Laser Power Density = ${computeLaserPowerDensity().toFixed(2)} W/cm²`;

  else if(diameterofLaserBeamRadio.checked)
    result.textContent = `Diameter of Laser Beam = ${computeDiameterofLaserBeam().toFixed(2)} mm`;

  else if(powerofLaserBeamRadio.checked)
    result.textContent = `Power of Laser Beam = ${computePowerofLaserBeam().toFixed(2)} W`;
})

// calculation

function computeLaserPowerDensity() {
  return ((250 / Math.pow(Number(diameterofLaserBeam.value), 2)) * Number(powerofLaserBeam.value)) * 100;
}

function computeDiameterofLaserBeam() {
  return (Math.sqrt((250 / Number(laserPowerDensity.value)) * Number(powerofLaserBeam.value))) * 10;
}

function computePowerofLaserBeam() {
  return ((Number(laserPowerDensity.value) / 250) * Math.pow(Number(diameterofLaserBeam.value), 2)) / 100;
}