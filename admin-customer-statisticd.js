// Dropdown functionality on click
document.getElementById('dropdown-btn').addEventListener('click', function() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Chart.js pie chart
const ctx = document.getElementById('customerChart').getContext('2d');
const customerChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['New Customers', 'Returning Customers'],
        datasets: [{
            label: '# of Customers',
            data: [50, 80],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.raw !== null) {
                            label += context.raw;
                        }
                        return label;
                    }
                }
            }
        }
    }
});
