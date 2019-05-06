<template>
	<div>
		<div class="card" >
	<div class="card-content">
    <div class="media">
      <div class="media-content" >
        <p class="title is-4 has-text-weight-bold"></p>
      </div>
    </div>Talent Calc

    <div class="content has-text-left">
		<div class="columns">
			<div class="column has-text-centered" >
				Assassination
				<div class="columns has-text-centered" :style="'background-image: URL(/images/talents/rogue/1.jpg);'">
					<div class="column" v-for="(talent, index) in talents.first" :key="index">
						<div class="talent-icon"  @click="addPoint(talent)" @click.right.prevent.self="removePoint(talent)">
							{{ talent.name }}
						</div>
						{{ talent.points }}
					</div>
				</div>
				<div class="columns has-text-centered" :style="'background-image: URL(/images/talents/rogue/1.jpg);'">
					<div class="column" v-for="(talent, index) in talents.second" :key="index">
						<div class="talent-icon"  @click="addPoint(talent)" @click.right.prevent.self="removePoint(talent)">
							{{ talent.name }}
						</div>
						{{ talent.points }}
					</div>
				</div>
				<div class="columns has-text-centered" :style="'background-image: URL(/images/talents/rogue/1.jpg);'">
					<div class="column" v-for="(talent, index) in talents.third" :key="index">
						<div class="talent-icon"  @click="addPoint(talent)" @click.right.prevent.self="removePoint(talent)">
							{{ talent.name }}
						</div>
						{{ talent.points }}
					</div>
				</div>
			</div>
			<div class="column has-text-centered">
				Combat
				<div class="columns">

					<div class="column">
			
					</div>
					<div class="column">
			
					</div>
					<div class="column">
			
					</div>
				</div>
			</div>
			<div class="column has-text-centered">
				Sublety
				<div class="columns">
					<div class="column">
			
					</div>
					<div class="column">
			
					</div>
					<div class="column">
			
					</div>
					<div class="column">
			
					</div>
				</div>
			</div>
		</div>
    </div>
  </div>
  <div class="card-content">
    <div class="content">
  <div class="my-pagination has-text-right">
   <button class="button is-info is-outlined" style="margin-right: 10px" title="This is the first page" >Previous</button>
   <button class="button is-info is-outlined" >Next page</button>
  </div>
    </div>
  </div>
</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				talents: {
					first: {
						0: {
							name: 'Eviserate',
							points: 0,
							maxPoints: 3,
							tooltip: 'Increases the damage by Eviserate by '

						},
						1: {
							name: 'Remorseless Attacks',
							points: 0,
							maxPoints: 2,
							tooltip: 'After killing...'
						},
						2: {
							name: 'Malice',
							points: 0,
							maxPoints: 5,
							tooltip: 'Increases your crtitical strike chance by ',
							spellId: 14142
						},
						3: {

						}
					},
					second: {
						0: {
							name: 'Ruthlessness',
							points: 0,
							maxPoints: 3,
							tooltip: 'Increases the damage by Eviserate by '

						},
						1: {
							name: 'Murder',
							points: 0,
							maxPoints: 2,
							tooltip: 'After killing...'
						},
						2: {

						},
						3: {
							name: 'Improved Slice and Dice',
							points: 0,
							maxPoints: 5,
							tooltip: 'Increases your crtitical strike chance by '
						}
					},
					third: {
						0: {
							name: 'Relentless Strikes',
							points: 0,
							maxPoints: 1,
							tooltip: 'Increases the damage by Eviserate by '

						},
						1: {
							name: 'Improved Expose Armor',
							points: 0,
							maxPoints: 2,
							tooltip: 'After killing...'
						},
						2: {
							name: 'Lethality',
							points: 0,
							maxPoints: 5,
							tooltip: 'Increases your crtitical strike chance by ',
							requiredSpell: 14142,
							requiredPoints: 5
						},
						3: {

						}
					}
				}
			}
		},
		methods: {
			addPoint(id, event) {
				if(id.points < id.maxPoints)
				{
					var keys = Object.keys(this.talents)
					if(id.requiredSpell)
					{
						for (var i = 0, len = keys.length; i < len; i++) 
						{
						  if(this.talents[keys[i]].requiredPoints == id.points)
						  {
						  	id.points += 1;
						  }
						  else {
						  	console.log('not enough points in ' + this.talents[keys[i]].name)
						  }
						}
					}
					else
					{
						id.points += 1;
						console.log(id.points)
					}
				}
			},
			removePoint(id) {
				if(id.points > 0)
				{
					id.points -= 1;
					console.log(id.points)
				}
			},
			checkRequiedPoints(a, b){
				if(a.requiredPoints == b.points)
				{
					return true
				}
				else
					console.log("not enough points")
				return false
			},
			exportBuild() {

			},
			importBuild(){

			}
		}
	}
</script>