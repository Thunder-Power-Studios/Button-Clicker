    var link = document.getElementById('cssLink');
//    link.href = "classic.css"; // this would work.  not flexible though.
    link.href = theme + ".css";


    // Get HTML head element
        var head=document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var dark = document.createElement('link');  // link is type of element in HTML5
 
        // set the attributes for link element
        dark.rel='stylesheet';
     
        dark.type='text/css';
     
        dark.href='dark.css';
 
        // Append link element to HTML head
        head.appendChild(dark);
