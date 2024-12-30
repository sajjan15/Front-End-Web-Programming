  document.addEventListener('DOMContentLoaded', () => {
    const reservations = [
      {
        model: 'BMW M2',
        price: '$58,900',
        image: 'images/BMW M2.jpg',
        engine: '3.0L inline-6',
        horsepower: '405 hp',
        features: 'Turbocharged engine, advanced technology, premium materials'
      },
      {
        model: 'BMW M5 MANHART',
        price: '$103,500',
        image: 'images/BMW M5 Manhart V8 F90.jpg',
        engine: '4.4L V8',
        horsepower: '600 hp',
        features: 'V8 engine, luxurious interior, advanced suspension system'
      },
      {
        model: 'Cadillac CT 6 Sedan',
        price: '$58,995',
        image: 'images/Cadillac CT 6 sedan.jpg',
        engine: '3.0L V6',
        horsepower: '335 hp',
        features: 'Smooth ride, advanced safety features, spacious interior'
      },
      {
        model: 'Mercedes AMG',
        price: '$74,950',
        image: 'images/Mercedes AMG.jpg',
        engine: '4.0L V8',
        horsepower: '503 hp',
        features: 'Turbocharged engine, luxurious interior, advanced suspension system'
      },
      {
        model: 'Toyota GR Supra',
        price: '$43,540',
        image: 'images/toyota gr supra a90.jpg',
        engine: '3.0L inline-6',
        horsepower: '382 hp',
        features: 'Aerodynamic design, powerful engine, precise handling'
      },
      {
        model: 'Cadillac Escalade',
        price: '$76,295',
        image: 'images/4.jpg',
        engine: '6.2L V8',
        horsepower: '420 hp',
        features: 'Powerful engine, advanced technology, spacious interior'
      }
    ];

    function compareCars(index1, index2) {
      const car1 = reservations[index1];
      const car2 = reservations[index2];
    
      const compareContainer = document.getElementById('compareContainer');
      compareContainer.innerHTML = '';
    
      const compareTable = document.createElement('table');
      compareTable.classList.add('comparison-table');
    
      const headerRow = compareTable.insertRow();
      const headerCell1 = headerRow.insertCell();
      const headerCell2 = headerRow.insertCell();
      headerCell1.textContent = car1.model;
      headerCell2.textContent = car2.model;
    
      const attributesToCompare = ['model', 'price', 'image', 'engine', 'horsepower', 'features'];
      attributesToCompare.forEach(attribute => {
        const row = compareTable.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
    
        if (attribute === 'image') {
          const img1 = document.createElement('img');
          img1.src = car1[attribute];
          img1.alt = car1.model;
          img1.style.width = '100px';
          cell1.appendChild(img1);
    
          const img2 = document.createElement('img');
          img2.src = car2[attribute];
          img2.alt = car2.model;
          img2.style.width = '100px';
          cell2.appendChild(img2);
        } else {
          cell1.textContent = car1[attribute] || 'N/A';
          cell2.textContent = car2[attribute] || 'N/A';
        }
      });
    
      compareContainer.appendChild(compareTable);
    }

    const compareBtn = document.getElementById('compare-btn');
    compareBtn.addEventListener('click', () => {
      const car1Select = document.getElementById('car1');
      const car2Select = document.getElementById('car2');
      const car1Index = car1Select.selectedIndex - 1;
      const car2Index = car2Select.selectedIndex - 1;
    
      if (car1Index === -1 || car2Index === -1) {
        alert('Please select two cars to compare.');
        return;
      }
    
      compareCars(car1Index, car2Index);
    });
  });

