const validateTrue = (massive) => {
        massive.forEach(elem => {
            if (elem.name === 'tel') {
                (elem.value.length >= 6 && elem.value.length <= 12) ? (
                    elem.classList.add('success'),
                    elem.classList.remove('error')
                ) : (
                    elem.classList.add('error'),
                    elem.classList.remove('success')
                );
                
            }
            if (elem.name === 'fio') {
    
                (elem.value.length >= 2) ? (
                    elem.classList.add('success'),
                    elem.classList.remove('error')
                ) : (
                    elem.classList.add('error'),
                    elem.classList.remove('success')
                );
    
            }
        });
    
        let success = true;
        massive.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })
        return success
    
    
        
    }

    

export { validateTrue }