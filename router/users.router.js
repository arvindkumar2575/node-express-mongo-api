const express = require("express")
const router = express.Router();
const {user_get,user_get_by_id,user_post,user_update_by_id,user_update_by_params,user_delete,user_delete_by_id} = require('../controller/user.controller')
      
router.get("/users", user_get);
router.get("/users/:id", user_get_by_id)

router.post("/users", user_post)

router.patch("/users/:id", user_update_by_id)
router.patch("/users", user_update_by_params)

router.delete("/users/:id", user_delete_by_id)
router.delete("/users", user_delete)

module.exports=router;
