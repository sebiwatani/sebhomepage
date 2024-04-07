        let input = document.querySelector(".required");
        let button = document.querySelector(".submit-form");
        
        button.disabled = true; //setting button state to disabled
        
        input.addEventListener("change", stateHandle);
        
        function stateHandle() {
            if (document.querySelector(".required").value === "") {
                button.disabled = true; //button remains disabled
            } else {
                button.disabled = false; //button is enabled
            }
        }

