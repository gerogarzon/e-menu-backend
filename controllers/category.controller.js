const Category = require('../schemas/category.schema');


async function addCategory(req, res){
    try{
        if(!req.body.name || !req.body.status) {
            return res.status(400).send({error:'Falta un campo obligatorio'})
        }
        let newCategory = new Category(req.body);
        await newCategory.save();
        res.send({categoriaNueva : newCategory});
    } catch(error){
        res.status(404).send(error)
    }
};

async function getCategories(req, res) {
    const categoriesDB= await Category.find();
    return res.json({categoriesDB})
};

async function getCategory(req, res){
    const categoryId = req.query.category_id;
    const category = await Category.findById(categoryId);
    if(!category) return res.status(404).send({msg: 'No se encontro la categoria requerida'});
    return res.status(200).send({
        category: category,
    });
};

async function deleteCategory(req, res){
    const CategoryIdDelete = req.query.category_id_delete;
    const categoryDelete = await Category.findByIdAndDelete(CategoryIdDelete);
    if (!categoryDelete) return res.status(404).send({msg: 'No se encontro la categoria que deseas eliminar'})
    return res.status(200).send({ msg:`La categoría ${categoryDelete.name} ha sido eliminado exitosamente`})
}

async function updateCategory(req, res){

    const {categoryId} = req.params;
    const body = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, body, {new:true})
        
    if (!updatedCategory) {
        return res.json({ msg:"No se encuentra la categoría que deseas modificar"})
    }else{
    return res.json({updatedCategory});}
    
};


module.exports = {
    addCategory,
    getCategory,
    getCategories,
    deleteCategory,
    updateCategory,
};