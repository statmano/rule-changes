fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('grid-container');
    data.forEach((item, idx) => {
      // First row: Change & Area
      const row = document.createElement('div');
      row.className = 'grid-row';

      const changeDiv = document.createElement('div');
      changeDiv.innerHTML = `<div class='grid-label'>Description of Change</div><div class='grid-value'>${item.Change}</div>`;
      row.appendChild(changeDiv);

      const areaDiv = document.createElement('div');
      areaDiv.innerHTML = `<div class='grid-label'>Area of Improvement</div><div class='grid-value'>${item.Area}</div>`;
      row.appendChild(areaDiv);

      container.appendChild(row);

      // Second row: Supporting Info
      const supportingRow = document.createElement('div');
      supportingRow.className = 'supporting-row';
      supportingRow.innerHTML = item.SupportingInfo;
      container.appendChild(supportingRow);

      // Divider except after last item
      if (idx < data.length - 1) {
        const divider = document.createElement('div');
        divider.className = 'section-divider';
        container.appendChild(divider);
      }
    });
  });
