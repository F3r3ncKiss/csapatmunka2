function egyszamjatek(szamok) {
    while (szamok.length > 0) {
      
        const legnagyobb = Math.max(...szamok);     

        
        if (szamok.filter(szam => szam === legnagyobb).length === 1)
            return legnagyobb;

     
        szamok = szamok.filter(szam => szam !== legnagyobb);
    }

    return -1;   
}