const router =require("express").Router();
const {getTodos,createTodo}=require("./controllers/Todo");


router.get("/", (req,res) =>{
res.send("Lets build a CRUID API");
});
router.get("/todo",getTodos);
router.post("/todos",createTodo);
module.exports=router;