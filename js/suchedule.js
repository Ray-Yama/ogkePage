
window.addEventListener('load', () => {
    const f = document.getElementById('scheduleFile01');

    f.addEventListener('change', evt => {
        let input = evt.target;
        
        if (input.files.length == 0) {
            console.log('No file selected');
            return;
        }
        
        const file = input.files[0];

        //
        // const label = this.nextElementSibling;
        const label = input.nextElementSibling;

        if (!label.classList.contains("changed")) {
            label.classList.add("changed");
        }

        label.nextElementSibling.innerHTML = file.name;
        //


        const reader = new FileReader();
        
        reader.onload = () => {
            // const pre = document.getElementById('pre1');
            // pre.innerHTML = reader.result;
            console.log(reader.result)
        };

        
        //console.log(reader.readAsText(file))
        reader.readAsText(file);
    });
});