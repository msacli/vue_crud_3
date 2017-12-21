<template>
	<div class="container">
		<h1>create element</h1>
    <!-- form to add add new item one row 2 x com md 3 icinde bir daha div o da form-group item

	form gourp içinde label ve input var v model item.name

     name and price and btn btn-primaru buttom

v-on:submit.prevent="addItem"> bura addItem cagiriliyor 
     -->

    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        
       
          <div class="col-md-3">
            <div class="form-group">
              <label>Item Price:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price" />
            </div>
          </div>
    
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
        </div>
    </form>


<br>
<br>

<!-- table (thead ve tbody) class table table-hover id item name item price ve aciton td leri 

	sonra tr de v-fro _item in items .name .price ._id ve edit isminde link router_lint : to name:'EditItem btn btn-primary 

sonra buttpn btn-danger v-on:click deleteItem-->

<table class="table table-hover">
		<thead>
		<tr>
			<td>id</td>
			<td>item name</td>
			<td>item price</td>
			<td>actions</td>
			</tr>
		</thead>
		<tbody>
			
			<tr v-for="_item in items">
				
				<td>{{_item.name}}</td>
				<td>{{_item.price}}</td>
				<td>{{_item._id}}</td>
				<td>
					<router-link :to="{
						name:'EditItem',
						params: {id: _item._id}
					}"
					class="btn btn-primary"
					>
					Edit
					</router-link>
				</td>
				<td>
					<button class="btn btn-danger"
					v-on:click="deleteItem(_item._id)"
					>
						delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
		

	</div>
</template>

<script>
	export default {
		/* data olarak items: [] ve item: {}*/
		data() {
			return {
			items: [],
			item: {}
			}
		},
		/*created fecthItems cagir*/
		created: function() {
			this.fetchItems();
		},
/*methods fetchItemsn deleteItem AddItem*/
		methods: {
			fetchItems() {
				let uri= 'http://localhost:2000/items/';
				this.axios.get(uri)
					.then((response)=>{
						this.items = response.data;
					});
			},
			deleteItem(id) {
				let uri = 'http://localhost:2000/items/delete/'+ id;
				this.axios.get(uri)
					.then(()=> {
						this.fetchItems();
					});
			},
			addItem() {
				let uri = 'http://localhost:2000/items/add/';
				this.axios.post(uri, this.item)
					.then((response)=> {
						this.$router.push({name: 'DisplayItem'});
						this.item = {};
						this.fetchItems();
					})
			}
		}


		

	}
</script>