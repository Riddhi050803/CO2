function changeContent1() {
    const newContent = `
    <div class="calculator-headings" id="BasicQuestionnaire">BASIC QUESTIONNAIRE</div>
         
    <section class="questionnaire" id="questionnaire">
      <form id="questions-form">
      <fieldset>
        <label for="businessSector">What sector is your business in?</label>
        <input type="text" id="businessSector" name="businessSector">

        <label for="numFacilities">How many facilities does your business have?</label>
        <input type="number" id="numFacilities" name="numFacilities">

        <label for="numEmployees">How many employees does your business have?</label>
        <input type="number" id="numEmployees" name="numEmployees">

        <label for="annualRevenue">Annual revenue</label>
        <input type="number" id="annualRevenue" name="annualRevenue">

        <label for="facilitySqFt">Square feet of facilities</label>
        <input type="number" id="facilitySqFt" name="facilitySqFt">

        </fieldset>
        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box1').addEventListener('click', changeContent1);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
function changeContent2() {
    const newContent = `
    <div class="calculator-headings" ">TRANSPORT</div>
         
    <section class="questionnaire" id="TRANSPORT">
      <form id="questions-form">
      <fieldset>
      <legend>Commuting Data</legend>
      <label for="primaryTransport">Primary Mode of Transportation for Commuting:</label>
      <select id="primaryTransport" name="primaryTransport">
        <option value="car">Car</option>
        <option value="publicTransit">Public Transit</option>
        <option value="cycling">Cycling</option>
        <option value="walking">Walking</option>
      </select>
      <label for="averageDistance">Average Commuting Distance (in miles):</label>
      <input type="number" id="averageDistance" name="averageDistance" step="0.1" min="0">
      <label for="commutingFrequency">Frequency of Employee Commuting (days/week):</label>
      <input type="number" id="commutingFrequency" name="commutingFrequency" min="0">
    </fieldset>

    <fieldset>
      <legend>Business Travel</legend>
      <label for="businessDistance">Typical Business Travel Distance (in miles):</label>
      <input type="number" id="businessDistance" name="businessDistance" step="0.1" min="0">
      <label for="businessTransport">Means of Transportation for Business Travel:</label>
      <select id="businessTransport" name="businessTransport">
        <option value="car">Car</option>
        <option value="plane">Plane</option>
        <option value="train">Train</option>
        <option value="other">Other</option>
      </select>
      <label for="businessTravelFrequency">Frequency of Business Travel (per month):</label>
      <input type="number" id="businessTravelFrequency" name="businessTravelFrequency" min="0">
    </fieldset>

    <fieldset>
      <legend>Logistics</legend>
      <label for="transportModesPercentage">Percentage of Goods Transported via Different Modes:</label>
      <input type="number" id="transportModesPercentage" name="transportModesPercentage" min="0" max="100">
    </fieldset>

        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box2').addEventListener('click', changeContent2);
  /*-------------------------------------------------------------------------------------------------------------------------------------*/
  function changeContent3() {
    const newContent = `
    <div class="calculator-headings" ">ENERGY CONSUMPTION</div>
         
    <section class="questionnaire">
      <form id="questions-form">
      <fieldset>
      <legend>Electricity Consumption</legend>
      <label for="electricityMonthly">Monthly Electricity Consumption (kWh):</label>
      <input type="number" id="electricityMonthly" name="electricityMonthly">
      <label for="electricityYearly">Yearly Electricity Consumption (kWh):</label>
      <input type="number" id="electricityYearly" name="electricityYearly">
    </fieldset>

    <fieldset>
      <legend>Heating and Cooling Systems</legend>
      <label for="heatingCoolingSystems">Heating and Cooling Systems in Place:</label>
      <select id="heatingCoolingSystems" name="heatingCoolingSystems">
        <option value="HVAC">HVAC</option>
        <option value="Radiators">Radiators</option>
        <option value="AirConditioning">Air Conditioning</option>
        <!-- Add more options if needed -->
      </select>
      <label for="usageMonitoring">How is Usage Tracked/Monitored?</label>
      <input type="text" id="usageMonitoring" name="usageMonitoring">
    </fieldset>
    <fieldset>
      <legend>Fuel Types and Quantities</legend>
      <label for="fuelTypes">Types of Fuels Used:</label>
      <input type="text" id="fuelTypes" name="fuelTypes">
      <label for="fuelQuantities">Quantities Used (in Liters or Gallons):</label>
      <input type="number" id="fuelQuantities" name="fuelQuantities">
      <label for="averageConsumption">Average Fuel Consumption per Vehicle/Machine:</label>
      <input type="number" id="averageConsumption" name="averageConsumption">
    </fieldset>
        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box3').addEventListener('click', changeContent3);
  /*-------------------------------------------------------------------------------------------------------------------------------------*/
  function changeContent6() {
    const newContent = `
    <div class="calculator-headings" id="BasicQuestionnaire">WASTE MANAGEMENT</div>
         
    <section class="questionnaire">
      <form id="questions-form">
      <fieldset>
      <legend>Solid Waste</legend>
      <label for="wasteQuantities">Quantities of Each Waste Type:</label>
      <input type="number" id="wasteQuantities" name="wasteQuantities">
      <label for="wasteDisposal">Waste Disposal Management:</label>
      <select id="wasteDisposal" name="wasteDisposal">
        <option value="recycling">Recycling</option>
        <option value="landfill">Landfill</option>
        <option value="incineration">Incineration</option>
        <!-- Add more options if needed -->
      </select>
    </fieldset>

    <fieldset>
      <legend>Wastewater</legend>
      <label for="treatmentCapacity">Treatment Capacity (in gallons per day):</label>
      <input type="number" id="treatmentCapacity" name="treatmentCapacity">
      <label for="treatmentEfficiency">Treatment Efficiency (%):</label>
      <input type="number" id="treatmentEfficiency" name="treatmentEfficiency">
      <label for="wastewaterVolume">Volume of Wastewater Discharge:</label>
      <input type="number" id="wastewaterVolume" name="wastewaterVolume">
    
    </fieldset>
    <fieldset>
      <legend>Renewable Energy Sources</legend>
      <label for="renewableQuantities">Quantities of Each Renewable Source:</label>
      <input type="number" id="renewableQuantities" name="renewableQuantities">
      <label for="renewablePercentage">Percentage of Energy from Renewables:</label>
      <input type="number" id="renewablePercentage" name="renewablePercentage" min="0" max="100">
    </fieldset>
    
        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box6').addEventListener('click', changeContent6);
  /*-------------------------------------------------------------------------------------------------------------------------------------*/
  function changeContent4() {
    const newContent = `
    <div class="calculator-headings" >SUPPLY-CHAIN</div>
         
    <section class="questionnaire">
      <form id="questions-form">
      <fieldset>
      <legend>Primary Transportation Modes</legend>
      <label for="transportationModes">Primary Modes Used:</label>
      <select id="transportationModes" name="transportationModes">
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="sea">Sea</option>
        <!-- Add more options if needed -->
      </select>
    </fieldset>
    <fieldset>
      <legend>Transportation Distance and Frequency</legend>
      <label for="averageDistance">Average Distance (in miles):</label>
      <input type="number" id="averageDistance" name="averageDistance">
      <label for="transportFrequency">Transportation Frequency (per week):</label>
      <input type="number" id="transportFrequency" name="transportFrequency">
    </fieldset>
    <fieldset>
      <legend>Packaging Materials</legend>
      <label for="packagingMaterials">Predominant Packaging Materials:</label>
      <input type="text" id="packagingMaterials" name="packagingMaterials">
      <label for="emissionOptimized">Emission-Optimized?</label>
      <select id="emissionOptimized" name="emissionOptimized">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>Inventory Management</legend>
      <label for="inventoryManagement">Excess Stock Minimization:</label>
      <input type="text" id="inventoryManagement" name="inventoryManagement">
    </fieldset>
        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box4').addEventListener('click', changeContent4);
  /*-------------------------------------------------------------------------------------------------------------------------------------*/
  function changeContent5() {
    const newContent = `
    <div class="calculator-headings" >PROCUREMENT</div>
         
    <section class="questionnaire">
      <form id="questions-form">
      <fieldset>
      <legend>Supplier Eco-Friendly Practices</legend>
      <label for="ecoFriendlyPractices">Follow Eco-Friendly Practices?</label>
      <select id="ecoFriendlyPractices" name="ecoFriendlyPractices">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>Sustainability in Supplier Selection</legend>
      <label for="sustainableCriteria">Use of Sustainability Criteria:</label>
      <input type="text" id="sustainableCriteria" name="sustainableCriteria">
    </fieldset>
    <fieldset>
      <legend>Local Sourcing Percentage</legend>
      <label for="localSourcingPercentage">Percentage of Local Sourcing:</label>
      <input type="number" id="localSourcingPercentage" name="localSourcingPercentage" min="0" max="100">
    </fieldset>
    <fieldset>
      <legend>Product Lifecycle Assessment</legend>
      <label for="lifecycleAssessment">Lifecycle Assessment Conducted?</label>
      <select id="lifecycleAssessment" name="lifecycleAssessment">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>Supplier Emission Data</legend>
      <label for="supplierEmissionData">Suppliers Provide Emissions Data?</label>
      <select id="supplierEmissionData" name="supplierEmissionData">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </fieldset>
        <button type="submit">Next</button>
      </form>
    </section>
    `;
    document.getElementById('cont1').innerHTML = newContent;
  }
  
  // Add event listener to the button to trigger content change
  document.getElementById('calculator-left-box5').addEventListener('click', changeContent5);