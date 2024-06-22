document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const resultTable = document.getElementById('resultTable');
    const tbody = resultTable.querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const nim = document.getElementById('nim').value;
        const prodi = document.getElementById('prodi').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${nim}</td>
            <td>${prodi}</td>
            <td>${gender}</td>
        `;

        resultTable.style.display = 'table';

        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Misalnya, jika kamu ingin menambahkan fungsi interaktif pada galeri foto
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            alert(`Kamu mengklik gambar: ${img.alt}`);
        });
    });
});
