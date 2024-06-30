// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
const originalNames = ["GIDEON", "FRIMPONG"];
 const modifiedNames = ["Gideonr" ,"frimpong"];
 console.log(createUserProfiles(originalNames, modifiedNames));
Output: [
  { originalName: "Gideon", modifiedName: "Gideon", id: 1 },
  { originalName: "Frimpong", modifiedName: "Frimpong", id: 2 },
  { originalName: "Frimpong", modifiedName: "Frimpong", id: 3 }
]
