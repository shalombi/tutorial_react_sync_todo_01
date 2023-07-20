
    const generateRandomId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let randomId = ''
        
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            randomId += characters[randomIndex]
        }
        
        return randomId
    }
    
    export const utilService = {
        generateRandomId
    }