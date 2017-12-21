var express = require('express');
var mongoose = require('mongoose');

var Item = require('../models/Item');

var itemRoutes = express.Router();

itemRoutes.route('/add').post((req,res)=>{
	var item = new Item(req.body);
	item.save()
		.then((item)=>{
			res.json({
				message: 'item is saved',
				item: item
			});
		})
		.catch((err)=>{
			res.json({
				message:'item couldn\'t be saved',
				err: err
			})
		});
});

itemRoutes.route('/').get((req,res)=>{
	Item.find()
		.then((err,items)=>{
			if(err) {res.send(err)
			} else {
				res.json(items)
			}
		});
});

/*get one item based on id*/
itemRoutes.route('/edit/:id').get((req,res)=>{
	var id = req.params.id;
	Item.findById(id, (err,item)=>{
		if(err) {
			console.log(err);
		} else {
			res.json(item)
		}
	});
});

/*edit item*/

itemRoutes.route('/update/:id').post((req,res)=>{
	var id = req.params.id;
	Item.findById(id, (err,item)=>{
		if(err) {
			res.send('couldnt find item')
		} else {
			item.name = req.body.name;
			item.price = req.body.price;
			item.save()
				.then((err,item)=>{
					res.json({
						message: 'item updated',
						item: item
					});
				})
				.catch((err)=>{console.log(err)});
		}
	});
});

/*delete item*/
itemRoutes.route('/delete/:id').get((req,res)=>{
	Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removeddd');
	});
 });




module.exports = itemRoutes;