import { MomentDateAdapter } from '@angular/material-moment-adapter';



export class MyDateAdapter extends MomentDateAdapter {

	public getDayOfWeekNames(style: "long" | "short" | "narrow"): string[] {
		if (style && style == "narrow") {
			return super.getDayOfWeekNames( "short" ).map( mes => mes.toLocaleUpperCase() ) ;
		}

		return super.getDayOfWeekNames( style );
	}
}

