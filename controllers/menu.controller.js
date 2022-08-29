const Menu = require('../schemas/menu.schema');


async function addMenu(req, res){
    try{
        if(!req.body.title || !req.body.description || !req.body.price) {
            return res.status(400).send({error:'something is missing'})
        }
        let newMenu = new Menu(req.body);
        await newMenu.save();
        res.json({menuNuevo : newMenu});
    } catch(error){
        res.status(404).send(error)
    }
};

async function getMenus(req, res) {
    const menusDB= await Menu.find();
   return  res.json({menusDB})
};

// async function getMenu(req, res){
//     const menuId = req.params;
//     const menu = await Menu.findById(menuId);
//     if(!menu) return res.status(404).send({msg: "We coulden't find the menu"});
//     return res.json({menu});
// };
async function getMenu(req, res){
    const menuId = req.params;
    const menu = await Menu.findById(menuId);
    if(!menu) return res.status(404).send({msg: 'No se encontro el menu requerido'});
    return res.json({menu});
};

async function deleteMenu(req, res){
    const {_id} = req.params;
    const product = await Menu.findByIdAndDelete({_id:_id})

    if(product){
        return res.json({message:"Product delete succesfully"})
    }else{
        return res.json({message:"Product not found"})
    }
}


async function updateMenu(req, res){
    const {menuId} = req.params;
    const body = req.body;
    const updatedMenu = await Menu.findByIdAndUpdate(menuId, body, {new:true});
    if (!updatedMenu) {
        return res.json({ msg:"We couldn't find the menu you want to edit"})
    }else{
    return res.json({updatedMenu});}
};



module.exports = {
    addMenu,
    getMenu,
    getMenus,
    deleteMenu,
    updateMenu,
}
