const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
    color.addEventListener('click', () => {
        if(!color.classList.contains('active')){

            // Remove active color
            colors.forEach((item) =>  {
                if(item.classList.contains('active'))
                    item.classList.remove('active');
            });

            // Add active color
            color.classList.add('active');

            const color_name = color.style['background-color']
            // Add color to localstorage
            window.localStorage.setItem('active-color', color_name);

            // Add color to body div
            document.documentElement.style.setProperty('--primary-color', color_name);
        }
    })
})
