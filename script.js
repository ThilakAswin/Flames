function flames() {
    const name1 = document.getElementById("yourname").value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById("crushname").value.toLowerCase().replace(/\s/g, '');
    
    
    if(name1 ==  "" || name2 == "" )
    {
        document.querySelector("h2").innerHTML = "Please fill the required fields";
    }
    
    else{
  
    // Calculate the count of unique characters in both names
    const uniqueChars = new Set(name1 + name2);
    const totalCount = uniqueChars.size;
  
    // Define the FLAMES relationships
    const relationships = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Brother/Sister'];
  
    let count = 0;
  
    // Calculate the remaining count after each relationship iteration
    for (let char of uniqueChars) {
      count += (name1.split(char).length - 1) + (name2.split(char).length - 1);
    }
  
    // Determine the relationship based on the count
    const relationshipIndex = (count % relationships.length) - 1;
    const result = relationshipIndex >= 0 ? relationships[relationshipIndex] : relationships[relationships.length - 1];
  
    // Display the result
    // document.getElementById("result").textContent = result;
    document.querySelector("h2").innerHTML = result;
    }
  }
