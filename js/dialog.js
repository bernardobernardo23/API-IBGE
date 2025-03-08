const dialog = document.getElementById("myDialog");
    const openBtn = document.getElementById("openDialog");
    const closeBtn = document.getElementById("closeDialog");

    openBtn.addEventListener("click", () => {
        dialog.showModal(); // Abre o diálogo
    });

    closeBtn.addEventListener("click", () => {
        dialog.close(); // Fecha o diálogo
    });