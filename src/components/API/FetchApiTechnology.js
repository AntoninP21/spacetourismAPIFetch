import React from 'react'

function FetchApiTechnology() {
  return (
    <div className='bodyTechnology'>
         <div className=main_technologie>
      <div className=titre_lancement>
         <span className=numero>03</span>@lang('LANCEMENT SPATIAL') 101
      </div>
      <div className=ensemble_technologie>
         <div className=boutons_technologie>
            <a href='{{route("technologie",["locale"=>App::getLocale()])}}' className=bouton_techno><div className=numero_boutons>1</div></a>
            <a href='{{route("technologiePage2",["locale"=>App::getLocale()])}}' className=bouton_techno><div className=numero_boutons>2</div></a>
            <a href='{{route("technologiePage3",["locale"=>App::getLocale()])}}' className=bouton_techno><div className=numero_boutons>3</div></a>
            @foreach(Technologie::all() as $technologieItem)
            @if(($technologieItem->title)==($technologie->title))
            <a href='{{route("technologieAutre",["locale"=>App::getLocale(),"technologieName"=>$technologieItem->title])}}' className=bouton_techno_selected><div className=numero_boutons>{{ $loop->index +4}}</div></a>
            @else
            <a href='{{route("technologieAutre",["locale"=>App::getLocale(),"technologieName"=>$technologieItem->title])}}' className=bouton_techno><div className=numero_boutons>{{ $loop->index +4}}</div></a>
            @endif
            @endforeach
         </div>
         <div className=texte_technologie>
            <div className=titre_technologie>
            @lang("$technologie->title")
            </div>
            <div className=corps_technologie>
            @lang("$technologie->detail")</div>
         </div>
         <div className=image_technologie>
            <img src="data:image/png;base64,{{ $technologie->image_path }}" alt="{{ $technologie->title}}">
         </div>
      </div>
   </div>
@stop
    </div>
  )
}

export default FetchApiTechnology