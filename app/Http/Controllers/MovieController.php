<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Trendingnewmovie;
use App\Models\Toprated;
use App\Models\Romance;
use App\Models\Horror;
use App\Models\Comedie;
use App\Models\Chorkioriginal;
use App\Models\Actionmovie;

use App\Models\Customeraddtowatchlaterlist;




class MovieController extends Controller
{
    //

    function addMovieTrendingNow(Request $req)
    {
        $movie = new Trendingnewmovie;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addMovieTopRated(Request $req)
    {
        $movie = new Toprated;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addMovieRomance(Request $req)
    {
        $movie = new Romance;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addMovieHorror(Request $req)
    {
        $movie = new Horror;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addMovieComedy(Request $req)
    {
    
        $movie = new Comedie;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addMovieChorkiOriginal(Request $req)
    {
    
        $movie = new Chorkioriginal;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function addActionMovie(Request $req)
    {
    
        $movie = new Actionmovie;

        $movie->movieName = $req->input('movieName');
        $movie->movieDescription = $req->input('movieDescription');

        $movie->moviePoster = $req->file('moviePoster')->store('movie');
        
        $movie->movieUrl = $req->input('movieUrl');
        $movie->movieRating = $req->input('movieRating');
        $movie->movieLanguage = $req->input('movieLanguage');
        $movie->movieCategory = $req->input('movieCategory');

        $movie->save();
        
        return $movie;

    }

    function getActionMovie()
    {
        return Actionmovie::all();

        //  $result =  Actionmovie::paginate(5);

        //  return $result;
    }

    function getChorkiOriginalsMovie()
    {
        return Chorkioriginal::all();
    }

    function getComdeyMovie()
    {
        return Comedie::all();
    }

    function getHorrorMovie()
    {
        return Horror::all();
    }

    function getRomanceMovie()
    {
        return Romance::all();
    }

    function getTopRatedMovie()
    {
        return Toprated::all();
    }

    function getTrendingNewMovie()
    {
        return Trendingnewmovie::all();
    }

    function deletegetActionMovie($id)
    {
        $result = Actionmovie::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "action movie has been deleted"];
        }
    }

    function deletegetChorkiOriginalsMovie($id)
    {
        $result = Chorkioriginal::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "chorki original movie has been deleted"];
        }
    }

    function deletegetComdeyMovie($id)
    {
        $result = Comedie::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "comedy movie has been deleted"];
        }
    }

    function deletegetHorrorMovie($id)
    {
        $result = Horror::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "Horror movie has been deleted"];
        }
    }

    function deletegetRomanceMovie($id)
    {
        $result = Romance::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "Romance movie has been deleted"];
        }
    }

    function deletegetTopRatedMovie($id)
    {
        $result = Toprated::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "Top Rated movie has been deleted"];
        }
    }

    function deletegetTrendingNewMovie($id)
    {
        $result = Trendingnewmovie::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "Trending New movie has been deleted"];
        }
    }

   
    // customer add to watch later list

    

    function customeraddtowatchlaterlist(Request $req)
    {
        $list = new Customeraddtowatchlaterlist;
        $list->customerId = $req->customerId;
        $list->name = $req->name;
        $list->email = $req->email;
        $list->profileImage = $req->profileImage;
        $list->movieName = $req->movieName;
        $list->movieDescription = $req->movieDescription;
        $list->moviePoster = $req->moviePoster;
        $list->movieTrailer = $req->movieTrailer;

        $list->save();

        return $list;

    }

    //customer view all watch later list (based on his id)

    function customerviewWatchList($id)
    {
        $result = Customeraddtowatchlaterlist::where('customerId',$id)->get();

        return $result;
    }

    // Customer delete his/her watchList

    function deleteWatchList($id)
    {
        $result = Customeraddtowatchlaterlist::find($id);

        $result = $result->delete();

        if($result)
        {
            return ["result" => "Movie watchList deleted successfully!"];
        }

    }


    function search($movieName)
    {
    
        $obj =  Trendingnewmovie::where('movieName','Like',"%$movieName%")->get();

         
        if(count($obj)!=0)
        {
            return $obj;
        }
       
       $obj =  Toprated::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }
       $obj =  Romance::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }
       $obj =  Horror::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }
       $obj =  Comedie::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }
       
     
       $obj =  Chorkioriginal::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }

       $obj =  Actionmovie::where('movieName','Like',"%$movieName%")->get();

       if(count($obj)!=0)
       {
           return $obj;
       }

       return "not found";     
    

        
    }

   

    public function test(){

        // movie               category
        //                                 id: 1=horror 2 romans
        // catgory_id= 2

        // $data = DB::table('movies')
        //         ->join('category','movies.category_id','category.id')
        //         ->select('movies.*','category.name') 
        //         ->get();


        //         $data = [
        //             'id': 1,
        //             'name': titanic,
        //             'category':romance 
        //         ]


                

        // $data = Movie::all();

        //         $data =  [
        //             'id':1,
        //             'name': 'titanic',

        //             cateogry[
        //                 'id':2,
        //                 'name':romance
        //             ]

        //         ]


    }

}
