//MongoBooster support fluent query builder API.
//instead of writing:
//db.user.find({age:{$gte:21,$lte:65}},{name,1,age:1,_id:-1}).sort({age:-1, name:1});
//we can instead write:
//db.user.where('age').gte(21).lte(65).select('name age -_id').sort("-age name");    
db.libros.find({})
