package github.opendesk.deskservice.service;

import github.opendesk.deskservice.converter.DeskConverter;
import github.opendesk.deskservice.dao.DeskDao;
import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.repository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;



@Service
public class DeskServiceImpl implements DeskService {

    @Autowired
    private DeskRepository deskRepository;

    @Override
    public List<Desk> getDesks() {
        List<DeskDao>  deskDaoList = new ArrayList<DeskDao>();
        deskRepository.findAll().forEach(deskDaoList :: add);
        return deskDaoList.stream().map(DeskConverter.deskDaoToDeskModel).collect(Collectors.toList());
    }

    @Override
    public Desk getDesk(String id) {
        return DeskConverter.deskDaoToDeskModel.apply(deskRepository.findById(id).orElseGet(()->DeskDao.builder().build()));
    }

    @Override
    public Desk addDesk(Desk desk) {
        DeskDao bookingDao = deskRepository.save(DeskConverter.deskModelToDeskDao.apply(desk));
        return DeskConverter.deskDaoToDeskModel.apply(bookingDao);
    }

    @Override
    public Desk updateDesk(Desk desk) {
        DeskDao bookingDao = deskRepository.save(DeskConverter.deskModelToDeskDao.apply(desk));
        return DeskConverter.deskDaoToDeskModel.apply(bookingDao);
    }

    @Override
    public void deleteDesk(String id) {
        deskRepository.deleteById(id);
    }
}

