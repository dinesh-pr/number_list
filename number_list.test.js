const number_list=artifacts.require("number_list");

contract("number_list",(accounts)=>{
    before (async()=>{
        instance = await number_list.deployed()
    })
    it ('ensure that total  is updatetd',async()=>{
        let ans= await instance.total([1,2,3])
        // let ans=await instance.get()
        assert.equal(ans,6,"The output is not correct")
    })
    it('ensure that number_lisy  is updatetd',async()=>{
        let ans= await instance.number(5)
        // let ans=await instance.get()
        assert.equal(ans,[0,1,2,3,4,5],"The output is not correct")
    })
})