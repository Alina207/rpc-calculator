<template>
    <div id="FirstSection">
    <div class="row">
        <div class="col-lg-12 header">
            <h1>RPC Calculator</h1>
            <p>TransUnion's RPC calculator can help your organization estimate the financial benefit resulting from improved likelihood of contacting the correct debtor (right party) by using TransUnion phone data. The calculator displays the benefit in dollars your organization stands to gain in monthly cures, as well as the financial benefit stemming from improved department efficiency. </p>
        </div>
    </div>
<!--- ///// Section 1 /////// -->
    <div class="row">
        <div class="col-md-12 wrapper">
					<div class="col-md-6 left-block">
                        <h3 class="sectionTitle">Benefit to Delinquency/Chargeoffs</h3>
							<form role="form">                     
									<div class="form-group">
											<label for="">Monthly # of accounts > 30 DQ <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="number_of_accounts"/>
									</div>
									<div class="form-group">
											<label for="">Average balance <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="avg_balance"/> 
									</div>
									<div class="form-group">
											<label for="">Total DQ portfolio balance <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcTotalDQ"/> 
									</div>
									<div class="form-group currentRPC">
											<label for="">Current RPC% <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="current_rpc">
									</div>
									<div class="form-group currentPTP">
											<label for="">Current PTP% <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="current_ptp" >
									</div>
									<div class="form-group">
											<label for=""># of cures monthly w/o TransUnion <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcNumberOfCures" >
									</div>
									<div class="form-group">
											<label for="">$ of cures monthly w/o TransUnion <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcCostOfCures">
									</div>
									<!-- <button class="btn">Calculate</button> -->
							</form>
					</div> <!-- end col-6-->

					<div class="col-md-6 right-block">
							<h2>Based on your inputs:</h2>
							<table class="table">
									<tbody>
											<tr>
													<td>TLOxp RPC % Increase</td>
													<td>{{rpc_increase}}%</td>
											</tr>
											<tr>
													<td>RPC % with TLOxp</td>
													<td>{{calcRPCwithTLOxp}}%</td>
											</tr>
											<tr>
													<td>PTP %</td>
													<td>{{current_ptp}}%</td>
											</tr>
											<tr>
													<td>Cures w/ TLOxp</td>
													<td>{{calcNumberCuresWithTLOxp}}</td>
											</tr>
											<tr>
													<td>Cures w/ TLOxp</td>
													<td>${{calcCostCuresWithTLOxp}}</td>
											</tr>
									</tbody>
							</table>

									<div class="col-lg-12 bottom-right-block">
											<h3>
													Monthly Cures<br>due to TransUnion:
											</h3>
											<h2>${{calcTotalMonthlyCures}}</h2>
									</div>

					</div> <!-- /col-6 -->
        
        </div> <!-- end section 1 wrap col -->
    </div> <!-- end section 1 row -->

    <!--- ///// Section 2 /////// -->

    <div class="row">
        <div class="col-md-12 section-2 wrapper">
			<div class="col-md-6 left-block">
              <h3 class="sectionTitle">Department Efficiencies</h3>
							<form role="form">                     
									<div class="form-group">
											<label for="">Number of reps <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="number_of_reps"/>
									</div>
									<div class="form-group">
											<label for="">Average calls/hr <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="avg_calls"/> 
									</div>
									<div class="form-group">
											<label for="">Average min/call <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcAvgMinutes"/> 
									</div>
									<div class="form-group">
											<label for="">Current RPC% <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="current_rpc" >
									</div>
									<div class="form-group">
											<label for="">Average salary/rep <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="avg_salary_per_rep">
									</div>
                                    <div class="form-group">
											<label for="">Hours in work year <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="hrs_in_work_year">
									</div>
                                    <div class="form-group">
											<label for="">Hourly cost/rep <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcHrlyCostPerRepYrly">
									</div>
                                    <div class="form-group currentRPC">
											<label for="">Cost/call <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcCostPerCallDE">
									</div>
									<div class="form-group currentPTP">
											<label for="">Cost/RPC <span class="fa tufa-info-circle"></span></label>
											<input type="number" name="" class="form-control" v-model.number="calcCostPerRPC " >
									</div>
									<!-- <button class="btn">Calculate</button> -->
							</form>
					</div> <!-- end col-6-->

					<div class="col-md-6 right-block">
							<h2>Based on your inputs:</h2>
							<table class="table">
									<tbody>
											<tr>
													<td>TLOxp RPC % Increase</td>
													<td>{{rpc_increase}}%</td>
											</tr>
											<tr>
													<td>New RPC rate with TLOxp</td>
													<td>{{calcRPCwithTLOxp}}%</td>
											</tr>
                                            <tr>
													<td>TLOxp cost/RPC</td>
													<td>${{calcTLOxpCostPerRPC}}</td>
											</tr>
											<tr>
													<td>Savings in cost/RPC</td>
													<td>${{calcCostSavings}}</td>
											</tr>
									</tbody>
							</table>

                        <div class="col-lg-12 bottom-right-block">
                            <h3>Monthly RPC Savings</h3>
                                <h2>${{calcTotalMonthlyCures}}</h2>
                            <h3>TLOxp new monthly RPC gained</h3>
                                <h2>{{ calcMonthlyRPCgained }}</h2>
                        </div>

					</div> <!-- /col-6 -->
        
        </div> <!-- end section 2 wrap col -->
    </div> <!-- end section 2 row -->

       <!--- ///// Section 3 /////// -->
    <div class="row">
    <!-- <div class="col-md-6 right-block">
        <table class="table">
            <tbody>
                <tr>
                    <td>TLOxp non-RPC calls mins/hour</td>
                    <td>{{calcNonRPCcallsTLOxp}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/rep</td>
                    <td>{{calcTimeSavingsPerRep}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/team</td>
                    <td>${{calcTimeSavingsPerTeam}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/team/month</td>
                    <td>${{calcTimeSavingsPerMonth}}</td>
                </tr>
            </tbody>
        </table>
    </div> -->
    <div class="col-md-6 col-md-offset-6 summary">
        <h2><span class="blue">Full Time Employee Savings</span> <br> Based on your inputs:</h2>
        <table class="table">
            <tbody>
                <tr>
                    <td>TLOxp non-RPC calls mins/hour</td>
                    <td>{{calcNonRPCcallsTLOxp}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/rep</td>
                    <td>{{calcTimeSavingsPerRep}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/team</td>
                    <td>${{calcTimeSavingsPerTeam}}</td>
                </tr>
                <tr>
                    <td>Time savings increasing RPC/hour/team/month</td>
                    <td>${{calcTimeSavingsPerMonth}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            number_of_accounts: '1000',
            avg_balance: '2500',
            current_rpc: '12',
            current_ptp: '80', // 0
            rpc_increase: '29',
            number_of_reps: '20',
            avg_calls: '15',
            avg_salary_per_rep: '50000',
            hrs_in_work_year:'2080',
            hrs_in_work_month: '160',
        }
    },
    computed: {
        calcTotalDQ: function(){
			var totalDQ = (this.number_of_accounts * this.avg_balance);
			return totalDQ;
		},
		calcNumberOfCures: function (){
			var numberOfCures = ( (this.number_of_accounts * (this.current_rpc * .01)) * (this.current_ptp * .01) );
			return numberOfCures;
		}, 
		calcCostOfCures: function (){
			var costOfCures = (this.avg_balance * this.calcNumberOfCures);
			return costOfCures; 
		},
		calcRPCwithTLOxp: function (){
			var RPCwithTLOxp = ( ((this.rpc_increase * .01) + 1) * this.current_rpc ); // need to round
			return RPCwithTLOxp; // ((this.rpc_increase * .01) + 1)
		},
		calcNumberCuresWithTLOxp: function (){
			var totalNumberCures = ( (this.number_of_accounts * this.calcRPCwithTLOxp) * (this.current_ptp * .0001) );
			return totalNumberCures;
		},
		calcCostCuresWithTLOxp: function (){
			var totalCostCures = (this.avg_balance * this.calcNumberCuresWithTLOxp);
			return totalCostCures;
		},
		calcTotalMonthlyCures: function (){
			var totalMonthlyCures = (this.calcCostCuresWithTLOxp - this.calcCostOfCures);
			return totalMonthlyCures;
		},
		// stating department efficiency
		calcAvgMinutes: function (){
			var avgMinutes = (60/this.avg_calls);
			return avgMinutes;
		},
		calcHrlyCostPerRepYrly: function (){
			var costPerRepYrly = (this.avg_salary_per_rep/this.hrs_in_work_year);
			return costPerRepYrly;
		},
		calcCostPerCallDE: function () {
			var costPerCallDE = (this.calcHrlyCostPerRepYrly/this.avg_calls);
			return costPerCallDE;
		},
		calcCostPerRPC: function () {
			var costPerRPC = ( (this.number_of_reps*this.calcHrlyCostPerRepYrly)/( (this.number_of_reps*this.avg_calls)*(this.current_rpc) ) );
			return costPerRPC;
		},
		calcTLOxpCostPerRPC: function () {
			var TLOxpCostPerRPC = ( (this.number_of_reps*this.calcHrlyCostPerRepYrly)/( (this.number_of_reps*this.avg_calls)*(this.calcRPCwithTLOxp) ) );
			return TLOxpCostPerRPC;
		},
		calcCostSavings: function () {
			var costSavings= (this.calcCostPerRPC - this.calcTLOxpCostPerRPC);
			return costSavings;
		},
		calcMonthlyRPCsavings: function () {
			var monthlyRPCsavings = ( ( (160 * this.number_of_reps * this.avg_calls) * this.current_rpc) * this.calcCostSavings  );
			return monthlyRPCsavings;
		},
		calcMonthlyRPCgained: function () {
			var monthlyRPCgained = (this.calcMonthlyRPCsavings/this.calcTLOxpCostPerRPC);
			return monthlyRPCgained;
		},
		// FTE Summary 
		calcHrlyCostPerRepMonthly: function () {
			var hrlyCostPerRepMonthly = ( this.avg_salary_per_rep/(12 * this.hrs_in_work_month) );
			return hrlyCostPerRepMonthly;
		},
		calcCostPerCallFTE: function () {
			var costPerCallFTE = (this.calcHrlyCostPerRepMonthly/this.avg_calls);
			return costPerCallFTE;
		},
		calcNonRPCcalls: function () {
			var nonRPCcalls = ( 60 - ( ( (this.current_rpc * .01) * this.avg_calls) * this.calcAvgMinutes) ) ;
			return nonRPCcalls;
		},
		calcNonRPCcallsTLOxp: function () {
			var nonRPCcallsTLOxp = ( 60 - ( ( (this.calcRPCwithTLOxp * .01) * this.avg_calls) * this.calcAvgMinutes) );
			return nonRPCcallsTLOxp;
		},
		calcTimeSavingsPerRep: function () {
			var timeSavingsPerRep = (this.calcNonRPCcalls - this.calcNonRPCcallsTLOxp);
			return timeSavingsPerRep;
		},
		calcTimeSavingsPerTeam: function () {
			var timeSavingsPerTeam = (this.calcTimeSavingsPerRep * this.number_of_reps);
			return timeSavingsPerTeam;
		},
		calcTimeSavingsPerMonth: function () {
			var timeSavingsPerMonth = (this.calcTimeSavingsPerTeam * this.hrs_in_work_month)
			return timeSavingsPerMonth;
		},
		calcFTEsavingsPerYr: function () {
			var fteSavingsPerYr = ( (this.calcTimeSavingsPerMonth * 12)/(160*12*60) );
			return fteSavingsPerYr;
		}
    }  
}
</script>

<style lang="scss">

.header {
    padding: 0;
    margin-bottom: 1.5em;

    h1 {
        font-size: 4em;
    }

    p {
        font-size: 1.3em;
        line-height: 1.5em;
    }
    
}

.left-block {
    border-right: 1px solid #A9A9A9;
    padding: 0;
        background: rgba(0,0,0,0.04);
  }

.right-block {
    padding-left: 0!important;
    padding-right: 0!important;
    padding-top: 4%;

    h3 {
 
    }

    h2 {
        text-align: center;
        font-family: IntroBold;
        font-size: 1.7em;
        line-height: 2em;
        
    }
}

.bottom-right-block {
    background-color: #fef3b2;
    margin-top: 2em;
    text-align: center;

    h3 {
        font-size: 1.7em;
        color: black;
        line-height: 1.5em;
    }

    h2 {
        font-family: IntroBold;
        font-size: 4.5em;
        line-height: 1em;
    }
}

.wrapper {
    border: 1px solid #A9A9A9;
    padding: 0!important;
}

td:nth-child(even){
    text-align: right;
}

.btn {
    display: block;
    background-color: #00A6CA;
    color: #ffffff;
    width: 100%;
    font-size: 1.5em;
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
}

.currentRPC {
    display: inline-block;
    width: 50%;
    padding-right: 2%;
}


.currentPTP {
    display: inline-block;
    width: 50%;
    padding-left: 2%;
}

.table {
    width: 88%;
    margin-left: 6%;
    font-size: 1.1em;
    font-weight: bold;
}

.table>tbody>tr>td, 
.table>tbody>tr>th, 
.table>tfoot>tr>td, 
.table>tfoot>tr>th, 
.table>thead>tr>td, 
.table>thead>tr>th {
    border-top: none!important;
    border-bottom: 1px solid #ddd;
}

form {
    padding: 0% 5% 5% 5%;
}

label {
    font-size: 1.2em;
    line-height: 1.5em;
    padding-top: 1.3%;
    font-weight: bold;
}

.sectionTitle {
    background-color:#00A6CA;;
    padding: 2.7%;
    margin-top: 0!important;
    text-align: center;
    color: #ffff;
    font-size: 1.7em;
}

.section-2 {
    margin-top: 2em;

}

.fa {
    font-family: tu-fontawesome;
    color: #A9A9A9;
    font-weight: normal;
    position: relative;
}

.fa-info-circle:before, .tufa-info-circle:before {
    content: "\f05a";
}

.blue {
    color: #006685;
}

.summary {
    padding-left: 0!important;
    padding-right: 0!important;
    padding-top: 4%;

    h2 {
        text-align: center;
        font-family: IntroBold;
        font-size: 1.7em;
        line-height: 1.5em;
        padding-bottom: .5em;
        
    }

}




</style>
