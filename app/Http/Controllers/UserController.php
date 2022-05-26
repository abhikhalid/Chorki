<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Customer;
use App\Models\Linebarareachartdata;
use App\Models\PieChartData;
use App\Models\ScatterchartData;
use App\Models\Customerchatlist;


use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    function register(Request $req)
    {
        $user = new User();
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);

        $user->save();

        return $user;
    }

    function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();

        if(!$user || !Hash::check($req->password, $user->password))
        {
            return ["error"=>"Email or password is incorrect"];
        }

        return $user;
    }

    function userList()
    {
       return Customer::all();
    }

    function deleteUser($id)
    {
        $result = User::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "user has been deleted"];
        }
    }

    // Customer  function starts here

    function customerRegister(Request $request)
    {
        $customer = new Customer;

        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->password = Hash::make($request->password);

        $customer->profileImage  = $request->file('profileImage')->store('movie');

        $customer->save();

        return $customer;

    }

    function customerLogin(Request $request)
    {
        $customer = Customer::where('email', $request->email)->first();

        if(!$customer || !Hash::check($request->password, $customer->password))
        {
            return ["error"=>"Email or password is incorrect"];
        }

        //now write that this customer is online by writing 1
        Customer::where('email', $request->email)->update(array('activestatus' => '1'));

        Customerchatlist::where('custoemrEmail', $request->email)->update(array('activestatus' => '1'));

        return $customer;
    }

      //customer change password

      function customerChangePassword(Request $request)
      {
        $customer = Customer::where('email', $request->email)->first();

        $customer->password = Hash::make($request->password);

        $customer->save();

        return $customer;


      }
  
   

    
    function customerLogout(Request $request)
    {
        // $customer = Customer::where('email', $request->email)->first();

         $customer = Customerchatlist::where('custoemrEmail', $request->email)->first();

        // if(!$customer || !Hash::check($request->password, $customer->password))
        // {
        //     return ["error"=>"Email or password is incorrect"];
        // }
         //now write that this customer is offline by writing 0
        
         Customer::where('email', $request->email)->update(array('activestatus' => '0'));

        Customerchatlist::where('custoemrEmail', $request->email)->update(array('activestatus' => '0'));

         return $customer;

    }




    function addLineBarAreaChartData(Request $request)
    {
       $linebarareachartdata = new Linebarareachartdata;

       $linebarareachartdata->monthName = $request->monthName;
       $linebarareachartdata->yearName = $request->yearName;
       $linebarareachartdata->monthlyNewUser = $request->monthlyNewUser;
       $linebarareachartdata->monthLostUser = $request->monthLostUser;
       $linebarareachartdata->yearlyNewUser = $request->yearlyNewUser;
       $linebarareachartdata->yearlyLostUser = $request->yearlyLostUser;

       $linebarareachartdata->save();

       return $linebarareachartdata;   
       
    }

    function addPieChartData(Request $request)
    {
        $pieChartData  = new PieChartData;
        
        $pieChartData->countryName = $request->countryName;
        $pieChartData->noOfUser = $request->noOfUser;

        $pieChartData->save();

        return $pieChartData;


    }

    function addScatterChartData(Request $request)
    {
      $scatterChartData = new ScatterchartData;

      $scatterChartData->subscriptionfee = $request->subscriptionfee;
      $scatterChartData->userWithSubscriptionFee = $request->userWithSubscriptionFee;


      $scatterChartData->save();

      return $scatterChartData;


        
    }

    function lineBarAreaChartDataFetch()
    {
        return Linebarareachartdata::all();
    }

    function pieChartDataFetch()
    {
        return PieChartData::all();
    }

    function scatterChartDataFetch()
    {
        return ScatterchartData::all();
    }


   

    
   

    function customerChatList(Request $request)
    {
        $data = Customerchatlist::find($request->customerId);

        if($data)
        {
            // return "exist!";

            //already exist korle database e update koro!

            $data->id = $request->customerId;
            $data->customerName = $request->customerName;
            $data->custoemrEmail = $request->custoemrEmail;
            $data->customerProfileImage = $request->customerProfileImage;
            $data->customerMessage = $request->customerMessage;
           
    
            $data->save();
    
            return $data;

        }
        else
        {
            // return "not exist!";

            //exist na korle database e store koro
            
           
            $customerchatList = new Customerchatlist;
            $customerchatList->id = $request->customerId;
            $customerchatList->customerName = $request->customerName;
            $customerchatList->custoemrEmail = $request->custoemrEmail;
            $customerchatList->customerProfileImage = $request->customerProfileImage;
            $customerchatList->customerMessage = $request->customerMessage;
    
            $customerchatList->save();
    
            return $customerchatList;
            
        }
      
        
    }

    function getCustomerAdminChatHead()
    {
    //   return Customerchatlist::all();   

      $result =  Customerchatlist::latest('updated_at')->get();   

      return $result;
    }


   
    function searchUserFromChatList($customerName)
    {

        $obj = Customerchatlist::where('customerName','Like',"%$customerName%")->get();

        return $obj;

    }

    //this method is only for testing purposes
    function getFakeData()
    {
        // return User->order_by('datetime', 'desc');

        // return DB::table('User')->latest()->first();

         $result=  User::latest('updated_at')->get();

         return $result;
    }


    public function getUser(){

        $user = User::with(['district','sims'])->get(); 

        return response()->json($user); 

        // $user = [
        //     'id':1,
        //     'name': 'abhi',
        //     district[
        //         'id':1,
        //         'district_name':'dhaka'
        //     ],
        //     sim[
        //         [
        //             id:1,
        //             'sim_name':'gp'
        //         ],
        //         [id:2,'sim_name':'roby'],
        //         [id:3,'sim_name':'banglalink'],
        //     ]
            
        // ]


        // const [user,setUser] = userState([]);
        // const [sim,setSim] = userState([]);

        // setSim(res.data.sim)

        // user.map();
        // sim.map();
    }
}
