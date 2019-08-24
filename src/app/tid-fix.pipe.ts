import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tidFix'
})
export class TidFixPipe implements PipeTransform {

  //Lägger till rätt Tid till 24h prognosen
  transform(value: string | Date): string {
    
    let gammaltDatum = new Date(value);

    gammaltDatum.setHours(gammaltDatum.getHours() + 1); 
    
    let Datum = (gammaltDatum.getFullYear()+'-'+ ('0' + (gammaltDatum.getMonth() + 1)).slice(-2) + '-' + ('0' + gammaltDatum.getDate()).slice(-2));

    let tid =  ('0' + gammaltDatum.getHours()).slice(-2) + ":" + ('0' + gammaltDatum.getMinutes()).slice(-2) + ":" + ('0' + gammaltDatum.getSeconds()).slice(-2);
 
    return Datum + ' & ' + tid
  }

}
