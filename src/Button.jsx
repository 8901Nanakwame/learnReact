
export  function MyButton() {
    const Mynam = 2+23;



return<>
<button className={'mb-2 error'}  > hello supper  </button>

    <SignIn />
    </>
}

export  function  SignIn( {}){
const profile =[
{
    name : 'grace',
    height:'tall',
    language :'akam'
},
{
    name : 'mary',
    height:'short',
    language :'ewe'
},
{
    name : 'mary',
    height:'short',
    language :'ewe'
}
]

    const filterProfile = profile.filter(profile =>
    profile.height ==='tall'
    )

    const listProfile=filterProfile.map(profile=>
<div key={profile.name}>

 <div> i am in love with  {profile.name} . i she is {profile.height} </div>
</div>
    )

return listProfile
}