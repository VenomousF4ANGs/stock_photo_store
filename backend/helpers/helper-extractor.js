module.exports = {
    extract_entities : function() 
    {
        var entities = [
            "dog",
            "cat",
            "mouse",
            "human",
            "gun",
            "game",
            "object",
            "fantasy",
            "car",
            "bike",
            "city",
            "computer",
            "abstract",
            "geometry",
            "liquid",
            "fire",
            "logo"
        ]
        var sel = new Set()
        for(i=0;i<3;i++){
            index = Math.floor(Math.random() * entities.length)
            sel.add(entities[index])
        }
        return Array.from(sel)
    }
}