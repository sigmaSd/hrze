export interface HrzeParam {
  weight: number,
  isoniazid_recommend_dose: number
}
export interface HrzeResult {
  hrze_number: number,
  rifampicin_number: number,
  rifampicin_final_dose: number,
  pyrazinamide_number: number,
  pyrazinamide_final_dose: number,
  ethambutol_number: number,
  ethambutol_final_dose: number
}

export function hrze({
  weight,
  isoniazid_recommend_dose
}: HrzeParam): HrzeResult {
  const rifampicin_theoritic_dose = get_rifampicin_theoritic_dose(weight);
  const pyrazinamide_theoritic_dose = get_pyrazinamide_theoritic_dose(weight);
  const ethambutol_theoritic_dose = get_ethambutol_theoritic_dose(weight);


  const rifampicin_dose_in_hrze = 150
  const pyrazinamide_dose_in_hrze = 400
  const ethambutol_dose_in_hrze = 275

  const hrze_number = isoniazid_recommend_dose / 75;
  const current_pyrainamide_dose = pyrazinamide_dose_in_hrze * hrze_number
  const current_rifampicin_dose = rifampicin_dose_in_hrze * hrze_number
  const current_ethambutol_dose = ethambutol_dose_in_hrze * hrze_number

  const rifampicin_dose_in_tablet = 300
  const pyrazinamide_dose_in_tablet = 500
  const ethambutol_dose_in_tablet = 400

  const extra_rifampicin_dose = rifampicin_theoritic_dose - current_rifampicin_dose
  const rifampicin_number = Math.ceil(extra_rifampicin_dose / rifampicin_dose_in_tablet)
  const rifampicin_final_dose = current_rifampicin_dose + rifampicin_number * rifampicin_dose_in_tablet

  const extra_pyrazinamide_dose = pyrazinamide_theoritic_dose - current_pyrainamide_dose
  const pyrazinamide_number = Math.ceil(extra_pyrazinamide_dose / pyrazinamide_dose_in_tablet)
  const pyrazinamide_final_dose = current_pyrainamide_dose + pyrazinamide_number * pyrazinamide_dose_in_tablet

  const extra_ethambutol_dose = ethambutol_theoritic_dose - current_ethambutol_dose
  const ethambutol_number = Math.ceil(extra_ethambutol_dose / ethambutol_dose_in_tablet)
  const ethambutol_final_dose = current_ethambutol_dose + ethambutol_number * ethambutol_dose_in_tablet


  return {
    hrze_number,
    rifampicin_number,
    rifampicin_final_dose,
    pyrazinamide_number,
    pyrazinamide_final_dose,
    ethambutol_number,
    ethambutol_final_dose
  }

}

/** rifampicin_theoritic_dose = 10 mg * weight in kg */
function get_rifampicin_theoritic_dose(weight: number) {
  return 10 * weight
}
/** pyrazinamide_theoritic_dose = 25 mg * weight in kg */
function get_pyrazinamide_theoritic_dose(weight: number) {
  return 25 * weight
}
/** ethambutol_theoritic_dose = 20 mg * weight in kg */
function get_ethambutol_theoritic_dose(weight: number) {
  return 20 * weight
}
