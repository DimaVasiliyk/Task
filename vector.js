export class Vector{
    
        x;
        y;
        constructor(x, y){
            this.x = x;
            this.y = y;
        }
        
        add(v2){
            this.x += v2.x;
            this.y += v2.y;
        }
    
        // static InitFromTwoPoints(start, end) {
        // 	const x = end.x - start.x;
        // 	const y = end.y - start.y;
    
        // 	return new Vector(x, y)
        // }
    
        static add(v1, v2){
            return new Vector(
                v1.x + v2.x,
                v1.y + v2.y,
            );
        }

}