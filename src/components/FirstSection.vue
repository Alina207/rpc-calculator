<template>
<div id="FirstSection">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 header">
				<h1><span>Right Party Contact</span> Benefit Calculator:</h1>
				<h2>Calculate Your RPC Savings with TransUnion</h2>
				<p>TransUnion's RPC calculator can help your organization estimate the financial benefit resulting from improved likelihood of contacting the correct debtor (right party) by using TransUnion phone data. The calculator displays the benefit in dollars your organization stands to gain in monthly cures, as well as the financial benefit stemming from improved department efficiency. </p>
			</div>
		</div>
	<!--- ///// Section 1 /////// -->
		<div class="row">
			<div class="col-md-12 wrapper">
				<div class="col-md-6 left-block">
					<h3 class="sectionTitle">Benefit to Delinquency/Charge-offs</h3>
					<form role="form">                     
						<div class="form-group">
							<label for="">Monthly # of accounts > 30 DQ</label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Number of accounts 30 days or greater in delinquent status' }"></span>
							<vue-numeric maxlength="10" class="form-control" v-model.number="number_of_accounts"></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Average balance</label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Average balance of delinquent accounts 30 days or greater past due' }"></span>
							<vue-numeric maxlength="5" class="form-control" currency="$" v-model.number="avg_balance"></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Total DQ portfolio balance </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Total delinquent portfolio balance' }"></span>
							<vue-numeric class="form-control" currency="$" v-model.number="calcTotalDQ" disabled></vue-numeric>
						</div>
						<div class="form-group currentRPC">
							<label for="">Current RPC% </label>
							<span class="fa tufa-info-circle" v-tooltip="{ content: 'The number of successful efforts divided by the total number of contact efforts' }"></span>
							<vue-numeric maxlength="2" class="form-control" :empty-value="12" v-model.number="current_rpc"></vue-numeric>
						</div>
						<div class="form-group currentPTP">
							<label for="">Current PTP% <sup>*</sup> </label>
							<span class="fa tufa-info-circle" v-tooltip="{ content: 'The percent of delinquent accounts that have an agreement such as a promissory note in place' }"></span>
							<vue-numeric maxlength="2" class="form-control" :empty-value="80" v-model.number="current_ptp" ></vue-numeric>
						</div>
						<div class="form-group">
							<label for=""># of cures monthly w/o TransUnion </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'The current number of monthly accounts that are brought back to current status from delinquent status without the use of TransUnion solutions' }"></span>
							<vue-numeric class="form-control" v-model.number="calcNumberOfCures" disabled></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Cost of cures monthly w/o TransUnion </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'The dollar value of monthly cures without the use of TransUnion solutions' }"></span>
							<vue-numeric class="form-control" currency="$" v-model.number="calcCostOfCures" disabled></vue-numeric>
						</div>
						<!-- <button class="btn">Calculate</button> -->
					</form>
				</div> <!-- end left-block-->

				<div class="col-md-6 right-block">
					<h2>Based on your inputs:</h2>
					<div class="col-lg-12">
						<table class="table">
							<tbody>
								<tr>
									<td>TU RPC % Increase <sup>**</sup></td>
									<td>{{rpc_increase | formatPercent }}</td>
								</tr>
								<tr>
									<td>New RPC rate with TU</td>
									<td>{{calcRPCwithTU | formatPercent }}</td>
								</tr>
								<tr>
									<td>PTP</td>
									<td>{{current_ptp | formatPercent }}</td>
								</tr>
								<tr>
									<td># of Cures w/ TU</td>
									<td>{{calcNumberCuresWithTU | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Cost of Cures w/ TU</td>
									<td>{{calcCostCuresWithTU | commaSeparateCurrency }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-lg-12 bottom-right-block">
						<h3>Monthly Cures<br>due to TransUnion:</h3>
						<h2>{{calcTotalMonthlyCures | commaSeparateCurrency }}</h2>
					</div>
				</div> <!-- end right-block -->
			</div> <!-- end section 1 wrapper -->
		</div> <!-- end section 1 row -->

	<!--- ///// Section 2 /////// -->
		<div class="row">
			<div class="col-md-12 section-2 wrapper">
				<div class="col-md-6 left-block">
					<h3 class="sectionTitle">Department Efficiencies</h3>
					<form role="form">                     
						<div class="form-group">
							<label for="">Number of reps </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Number of collections department staff members' }"></span>
							<vue-numeric maxlength="8" class="form-control" v-model.number="number_of_reps"></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Average calls/hr </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Average number of calls per hour by the entire collections department staff' }"></span>
							<vue-numeric maxlength="4" class="form-control" v-model.number="avg_calls"></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Average min/call </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Average number of calls per hour by the entire collections department staff' }"></span>
							<vue-numeric class="form-control" v-model.number="calcAvgMinutes" disabled></vue-numeric> 
						</div>
						<div class="form-group">
							<label for="">Current RPC% </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Current right party contact rate based on input in previous section' }"></span>
							<vue-numeric class="form-control" v-model.number="current_rpc" disabled></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Average salary/rep </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Average annual salary per staff member' }"></span>
							<vue-numeric maxlength="6" class="form-control" currency="$" v-model.number="avg_salary_per_rep"></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Hours in work year </label>
							<vue-numeric class="form-control" v-model.number="hrs_in_work_year" disabled></vue-numeric>
						</div>
						<div class="form-group">
							<label for="">Hourly cost/rep </label>
							<span class="fa tufa-info-circle" v-tooltip.left="{ content: 'Total salaries divided by number of staff members on an hourly basis' }"></span>
							<vue-numeric class="form-control" currency="$" v-model.number="calcHrlyCostPerRepYrly" disabled></vue-numeric>
						</div>
						<div class="form-group currentRPC">
							<label for="">Cost/call </label>
							<span class="fa tufa-info-circle" v-tooltip="{ content: 'Cost per call' }"></span>
							<vue-numeric class="form-control" currency="$" v-model.number="calcCostPerCallDE" disabled></vue-numeric>
						</div>
						<div class="form-group currentPTP">
							<label for="">Cost/RPC </label>
							<span class="fa tufa-info-circle" v-tooltip="{ content: 'Cost per right party contact' }"></span>
							<vue-numeric class="form-control" currency="$" v-model.number="calcCostPerRPC" disabled></vue-numeric>
						</div>
					</form>
				</div> <!-- end left-block -->

				<div class="col-md-6 right-block">
					<h2>Based on your inputs:</h2>
					<table class="table">
						<tbody>
							<tr>
								<td>TU RPC % Increase</td>
								<td>{{rpc_increase | formatPercent }}</td>
							</tr>
							<tr>
								<td>New RPC rate with TU</td>
								<td>{{calcRPCwithTU | formatPercent }}</td>
							</tr>
							<tr>
								<td>TU cost/RPC</td>
								<td>{{calcTUCostPerRPC | formatCost }}</td>
							</tr>
							<tr>
								<td>Savings in cost/RPC</td>
								<td>{{calcCostSavings | formatCost }}</td>
							</tr>
						</tbody>
					</table>
					<div class="col-lg-12 bottom-right-block">
						<h3>Monthly RPC Savings</h3>
						<h2>{{calcMonthlyRPCsavings | commaSeparateCurrency }}</h2>
						<h3>TU new monthly RPC gained</h3>
						<h2>{{calcMonthlyRPCgained | commaSeparateNumber }}</h2>
					</div>
				</div> <!-- end right-block-->
			</div> <!-- end section 2 wrapper -->
		</div> <!-- end section 2 row -->

	<!--- ///// Section 3 /////// -->
		<div class="row">
			<div class="col-md-12 summary">
				<h2><span class="blue">Full Time Employee Savings</span> <br> Based on your inputs:</h2>
				<div class="row">
					<div class="col-md-6 left-sum">
						<table class="table">
							<tbody>
								<tr>
									<td>Number of reps</td>
									<td>{{number_of_reps | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Average calls/hr</td>
									<td>{{avg_calls | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Average min/call</td>
									<td>{{calcAvgMinutes | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Current RPC%</td>
									<td>{{current_rpc | formatPercent }}</td>
								</tr>
								<tr>
									<td>Average salary/rep</td>
									<td>${{avg_salary_per_rep | commaSeparateNumber }}</td>
									<!-- breaks if commaSeparateCurrency is used -->
								</tr>
								<tr>
									<td>Hours in month</td>
									<td>{{hrs_in_work_month | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Hourly cost/rep</td>
									<td>{{calcHrlyCostPerRepMonthly | formatCost }}</td>
								</tr>
								<tr>
									<td>Cost/call</td>
									<td>{{calcCostPerCallFTE | formatCost }}</td>
								</tr>
								<tr>
									<td>Non-RPC calls mins/hours</td>
									<td>{{calcNonRPCcalls | commaSeparateNumber }}</td>
								</tr>
							</tbody>
						</table>
					</div> <!-- end left-sum -->
					<div class="col-md-6">
						<table class="table">
							<tbody>
								<tr>
									<td>TU RPC % Increase</td>
									<td>{{rpc_increase | formatPercent }}</td>
								</tr>
								<tr>
									<td>New RPC rate with TU</td>
									<td>{{calcRPCwithTU | formatPercent }}</td>
								</tr>
								<tr>
									<td>TU non-RPC calls mins/hour</td>
									<td>{{calcNonRPCcallsTU | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Average calls/hr</td>
									<td>{{calcTimeSavingsPerRep | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Time savings increasing RPC/hour/team</td>
									<td>{{calcTimeSavingsPerTeam | commaSeparateNumber }}</td>
								</tr>
								<tr>
									<td>Time savings increasing RPC/hour/team/month</td>
									<td>{{calcTimeSavingsPerMonth | commaSeparateNumber }}</td>
								</tr>
							</tbody>
						</table>
						<h3>FTE savings/year:</h3>
						<h2 class="totalFTE">{{calcFTEsavingsPerYr | commaSeparateNumber }}</h2>
					</div> <!-- end right sum -->
				</div> <!-- end summary row -->
			</div> <!-- end summary wrapper -->
		</div> <!-- end section 3 row -->
		<div class="rpc-footer">
			<p>*Assumed PTP brings account current, or delays charge off</p>
			<p>** In a recent study conducted by an independent third party, TransUnion RPC phone data beat completive data solution providers, with an increase in RPC % ranging from 29.4% to as much as 282.6%. The data represented RPC % on hits worked – first position only; multiple agencies and asset classes. For the 12 months ending January 2017; 4 million records. </p>
			<p>This calculator is intended to convey general information, including the potential financial benefits of improving your organization's Right Party Contact (RPC) rates. The information conveyed is not intended, nor should be construed or relied upon as legal advice. Please consult your own legal advisor or attorney with respect to your particular situation. While efforts have been made to ensure the information herein is up-to-date, it's not promised or guaranteed to be current, complete or up-to-date. You should consult a sales representative for further information.</p>
			<p>Free trial offer is for new customers only, may be limited to certain services in our sole discretion, and subject to additional terms and conditions. TU contains data governed by law and is subject to new account credentialing, which may include a site inspection and end user terms and conditions. Customer is responsible for the site inspection fee. The length of the free trial will be indicated at the time of the account approval.</p>
			<p>The TU solution is not provided by a consumer reporting agency and does not constitute a consumer report as these terms are defined by the Fair Credit Reporting Act. 15 U.S.C Section 1651 et seq ("FCRA"). The TU solution may not be used in whole or in part as a factor in establishing an individual's creditworthiness or eligibility for credit, insurance or employment not for any other purpose under the FCRA.</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            number_of_accounts: '',
            avg_balance: '',
            current_rpc: '12',
            current_ptp: '80', 
            rpc_increase: '29',
            number_of_reps: '',
            avg_calls: '',
            avg_salary_per_rep: '',
            hrs_in_work_year:'2080',
			hrs_in_work_month: '160'
        }
	},
	filters: {
		commaSeparateNumber: function (val){
        	return val.toLocaleString('en', { maximumFractionDigits: 0 });
      	},
		commaSeparateCurrency: function (val){
          	val = val.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        	return '$' + val;
      	},
		formatCost: function(val) {
			return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
			},
		formatPercent (val) {
			return val.toLocaleString('en-US', { maximumFractionDigits: 0 }) + '%';
		}
	},
    computed: {
		// Section 1
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
		calcRPCwithTU: function (){
			var RPCwithTU = ( ( (this.rpc_increase * .01) + 1.0) * (this.current_rpc * .01) * 100 ); 
			return RPCwithTU;
		},
		calcNumberCuresWithTU: function (){
			var totalNumberCures = ( (this.number_of_accounts * this.calcRPCwithTU) * (this.current_ptp * .0001) );
			return totalNumberCures;
		},
		calcCostCuresWithTU: function (){
			var totalCostCures = (this.avg_balance * this.calcNumberCuresWithTU);
			return totalCostCures;
		},
		calcTotalMonthlyCures: function (){
			var totalMonthlyCures = (this.calcCostCuresWithTU - this.calcCostOfCures);
			return totalMonthlyCures;
		},
		// Section 2
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
			var costPerRPC = ( (this.number_of_reps*this.calcHrlyCostPerRepYrly)/( (this.number_of_reps*this.avg_calls)*(this.current_rpc * .01) ) );
			return costPerRPC;
		},
		calcTUCostPerRPC: function () {
			var TUCostPerRPC = ( (this.number_of_reps*this.calcHrlyCostPerRepYrly)/( (this.number_of_reps*this.avg_calls)*(this.calcRPCwithTU * .01) ) );
			return TUCostPerRPC; 
		},
		calcCostSavings: function () {
			var costSavings= (this.calcCostPerRPC - this.calcTUCostPerRPC);
			return costSavings;
		},
		calcMonthlyRPCsavings: function () {
			var monthlyRPCsavings = ( ( (160 * this.number_of_reps * this.avg_calls) * (this.current_rpc * .01)) * this.calcCostSavings  );
			return monthlyRPCsavings;
		},
		calcMonthlyRPCgained: function () {
			var monthlyRPCgained = (this.calcMonthlyRPCsavings/this.calcTUCostPerRPC);
			return monthlyRPCgained;
		},
		// Section 3
		calcHrlyCostPerRepMonthly: function () {
			var hrlyCostPerRepMonthly = ( this.avg_salary_per_rep/(12 * this.hrs_in_work_month) );
			return hrlyCostPerRepMonthly;
		},
		calcCostPerCallFTE: function () {
			var costPerCallFTE = (this.calcHrlyCostPerRepMonthly/this.avg_calls);
			return costPerCallFTE;
		},
		calcNonRPCcalls: function () {
			var nonRPCcalls = ( 60 - ( ((this.current_rpc * .01) * this.avg_calls) * this.calcAvgMinutes) ) ;
			return nonRPCcalls;
		},
		calcNonRPCcallsTU: function () {
			var nonRPCcallsTU = ( 60 - ( ( (this.calcRPCwithTU * .01) * this.avg_calls) * this.calcAvgMinutes) );
			return nonRPCcallsTU;
		},
		calcTimeSavingsPerRep: function () {
			var timeSavingsPerRep = (this.calcNonRPCcalls - this.calcNonRPCcallsTU );
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

#FirstSection {

	.container {
		width: 60em;
	}

	.header {
		padding-top: 1em;
		margin-bottom: 1.5em;

		h1 {
    		line-height: 1.5em;
			font-weight: 600;
			font-size: 2.5em;
		}

		span {
			background-color: #FCD800;
    		padding: 0 .2em;
		}

		h2 {
			font-size: 2em;
    		padding-bottom: .5em;
		}

		p {
			font-size: 1.2em;
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

		h2 {
			text-align: center;
			// font-family: IntroBold;
			font-size: 1.7em;
			line-height: 2em;
			
		}
	}

	.bottom-right-block {
		background-color: #fef3b2;
		margin-top: 2em;
		text-align: center;
		padding: 2em 0 3em 0;
		border-right: 1px solid #A9A9A9;

		h3 {
			font-size: 1.7em;
			color: black;
			line-height: 1.5em;
		}

		h2 {
			// font-family: IntroBold;
			font-size: 3.5em;
			line-height: 1em;
			font-weight: 700;
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

	.form-group {
		margin-top: 2em;

		input[disabled="disabled"], select[disabled="disabled"], .form-control[disabled], fieldset[disabled] {
			border: 1px solid rgba(0, 0, 0, 0.131);
			font-weight: normal;
			background-color: #eee;
			cursor: default;
		}

	}


	label {
		font-size: 1.2em;
		float: left;
		padding-bottom: .7em;
	}



	.sectionTitle {
		background-color:#00A6CA;
		padding: 2.7%;
		margin-top: 0!important;
		text-align: center;
		color: #ffff;
		font-size: 1.5em;
	}

	.section-2 {
		margin-top: 2em;

	}

	.section-2 .bottom-right-block {
		padding: 4em 0;
	}

	.fa {
		// font-family: tu-fontawesome;
		// font-size: 1.3em;
		float: right;
		color: #A9A9A9;
		padding-right: .3em;
	}

	.fa-info-circle:before, .tufa-info-circle:before {
		content: "\f05a";
	}

	.blue {
		color: #00A6CA;
	}

	.summary {
		border: 1px solid #A9A9A9;
		margin-top: 1.5em;
		padding-bottom: 2em;

		h2 {
			text-align: center;
			// font-family: IntroBold;
			font-size: 1.7em;
			line-height: 1.5em;
			padding-bottom: .5em;
		}

		h3 {
			font-size: 1.7em;
			color: black;
			line-height: 1.5em;
			text-align: center;
			padding-top: 1em;
		}

		.totalFTE {
			// font-family: IntroBold;
			font-size: 4.5em;
			line-height: 1em;
		}
	}

	.left-sum {
		border-right: 1px solid #A9A9A9;
	}

	.rpc-footer {
		font-size: .8em;
		color: #777;
		margin: 2em 0 2em -1em;
	}
}

////////// Tool-tips ///////////
// keep outside of #FirstSection

.tooltip {
  display: block !important;
  z-index: 10000;
 
  .tooltip-inner {
    background: #FCD800;
    color: black;
    border: #FCD800;
    padding: 8px 8px 10px 10px;
	box-shadow: 3px 5px 5px rgba(black, .1);
	text-align: left;
	font-family: Intro, "Trebuchet MS", Helvetica, Arial, sans-serif;
  }
 
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #FCD800;
    z-index: 1;
  }
 
  &[x-placement^="top"] {
    margin-bottom: 5px;
 
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
 
  &[x-placement^="bottom"] {
    margin-top: 5px;
 
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
 
  &[x-placement^="right"] {
    margin-left: 5px;
 
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
 
  &[x-placement^="left"] {
    margin-right: 7px;
 
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
 
  &.popover {
    $color: #f9f9f9;
 
    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }
 
    .popover-arrow {
      border-color: $color;
    }
  }
 
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }
 
  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}



</style>
