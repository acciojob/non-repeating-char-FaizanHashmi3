//your JS code here. If required.
var inp = prompt("Enter a string");

function util(str)
	{
		let arr=[];
		for(let i=0;i<str.length;i++)
			{
				arr[i]=str.charAt(i);
			}
		arr.sort();
		// let ans=arr[0];
		if(arr.length==1) return arr[0];
		if((arr.length>=2)&&(arr[0]!=arr[1])) return arr[0];
		for(let i=1;i<arr.length-1;i++)
			{
				if((arr[i]!=arr[i+1])&&(arr[i]!=arr[i-1]))
				{
					return arr[i];
				}
			}
		if(arr[arr.length-1]!=arr[arr.length-2])
		{
			return arr[arr.length-1];
		}
		
	}
let res=util(inp);
alert(res);

