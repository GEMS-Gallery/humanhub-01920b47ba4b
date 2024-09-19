import { backend } from 'declarations/backend';

async function loadCompanyInfo() {
    try {
        const companyInfo = await backend.getCompanyInfo();
        
        // Update company name
        document.getElementById('companyName').textContent = `Welcome to ${companyInfo.name}`;
        
        // Update mission statement
        document.getElementById('missionStatement').textContent = companyInfo.mission;
        
        // Update values
        const valuesList = document.getElementById('valuesList');
        companyInfo.values.forEach(value => {
            const li = document.createElement('li');
            li.textContent = value;
            valuesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading company info:', error);
    }
}

// Load company info when the page loads
window.addEventListener('load', loadCompanyInfo);
