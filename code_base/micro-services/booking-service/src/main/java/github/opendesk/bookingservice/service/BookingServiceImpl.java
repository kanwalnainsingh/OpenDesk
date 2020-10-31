package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.BookingModel;
import github.opendesk.bookingservice.repository.BookingRepository;
import static github.opendesk.bookingservice.converter.BookingConvertor.bookingDaoToBookingModel;
import static github.opendesk.bookingservice.converter.BookingConvertor.bookingModelToBookingDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public List<BookingModel> getBookings() {
        List<BookingDao>  bookingList = new ArrayList<BookingDao>();
        bookingRepository.findAll().forEach(bookingList :: add);
        return bookingList.stream().map(bookingDaoToBookingModel).collect(Collectors.toList());
    }

    @Override
    public BookingModel getBooking(String id) {
        return bookingDaoToBookingModel.apply(bookingRepository.findById(id).orElseGet(()->BookingDao.builder().build()));
    }

    @Override
    public BookingModel addBooking(BookingModel bookingModel) {
        BookingDao bookingDao = bookingRepository.save(bookingModelToBookingDao.apply(bookingModel));
        return bookingDaoToBookingModel.apply(bookingDao);
    }

    @Override
    public BookingModel updateBooking(BookingModel bookingModel) {
        BookingDao bookingDao = bookingRepository.save(bookingModelToBookingDao.apply(bookingModel));
        return bookingDaoToBookingModel.apply(bookingDao);
    }

    @Override
    public void deleteBooking(String id) {
        bookingRepository.deleteById(id);
    }
}
