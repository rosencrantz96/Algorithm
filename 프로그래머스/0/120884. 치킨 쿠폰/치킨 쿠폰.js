function solution(chicken) {
    const aux = (coupons) => {
        // 10장 미만일 경우 치킨 x 
        if(coupons < 10) return 0;
        
        // 서비스 치킨 구하기 
        let serviceChicken = Math.floor(coupons / 10);
        // 남은 쿠폰
        const remainCoupon = coupons % 10;

        // 서비스 치킨에도 쿠폰이 발급되기 때문에 재귀 함수 사용
        return serviceChicken + aux(serviceChicken + remainCoupon);
    }
    
    return aux(chicken);
}