class Shape{
	calculatearea(){
		console.log("area")
	}
	}
	
	class Circle extends Shape{
		constructor(radius){
		super()
		this.radius=radius;
		}
		calculatearea(){
			let c=3.14*this.radius*this.radius;
			console.log(`area of circle ${c}`)
		}
	}
	class Triangle extends Shape{
		constructor(base,height){
		super()
		this.base=base;
		this.height=height;
		}
		calculatearea(){
			let d=1/2*(this.base*this.height);
			console.log(`area of triangle ${d}`)
		}
	}

let ans=new Circle(5);
ans.calculatearea();
let res=new Triangle(10,5);
res.calculatearea();