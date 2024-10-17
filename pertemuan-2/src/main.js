let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();

   if (title === "") {
      alert("Inputan masih kosong");
      return;
   }

   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `p-2 mb-2 bg-gray-200 rounded flex justify-between items-center`;

   task.innerHTML = `
      <p class="text-gray-700 font-medium">${title}</p>
      <div class="flex gap-2">
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer font-bold">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer">
      </div>
   `;

   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
