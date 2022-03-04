// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract number_list{


    function number(uint  x) public pure returns(uint[] memory) {
        uint[] memory n = new uint[](x+1);
        for (uint i=1;i<=x;i++){
            n[i]=i;
        }
        return n;
}
    function total(uint[] memory d) public pure returns (uint){
        uint sum=0;

        for  ( uint j=0 ;j<=(d.length)-1;j++){
            sum=sum+d[j];
        }
        return sum;
    }
}


