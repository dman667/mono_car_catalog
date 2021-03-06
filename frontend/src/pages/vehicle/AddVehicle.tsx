import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import './AddVehicle.css';
import AddVehicleForm from './components/AddVehicleForm';
import { useAddVehicleStore } from '../../StoreProvider';
import Spinner from '../../components/common/Spinner';

const AddVehicle = observer(() => {
  const { search } = useLocation();
  const vehicleID = search.slice(4); // Vehicle ID from location param
  const { isLoading } = useAddVehicleStore();
  const { t } = useTranslation();

  return (
    <main className="f-addVehicle-top-container">
      <div className="f-addVehicle-inner-container">
        <header>
          <span>
            {vehicleID ? t('vehicleForm.editHeader') : t('vehicleForm.header')}
          </span>
        </header>
        <div className="f-addVehicle-form-container">
          {isLoading ? <Spinner /> : <AddVehicleForm vehicleID={vehicleID} />}
        </div>
      </div>
    </main>
  );
});

export default AddVehicle;
