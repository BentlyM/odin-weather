

const cardComponent = (idName) => {
    const CardLayout = document.createElement('div');
    CardLayout.classList.add('card-layout');
        
    if(idName) CardLayout.id = idName;


    return CardLayout;
}

export default cardComponent;