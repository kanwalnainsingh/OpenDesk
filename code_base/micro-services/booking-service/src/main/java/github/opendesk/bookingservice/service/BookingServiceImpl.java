package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.Booking;
import github.opendesk.bookingservice.repository.BookingRepository;
import static github.opendesk.bookingservice.converter.BookingConverter.bookingDaoToBookingModel;
import static github.opendesk.bookingservice.converter.BookingConverter.bookingModelToBookingDao;

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
    public List<Booking> getBookings() {
        List<BookingDao>  bookingList = new ArrayList<BookingDao>();
        bookingRepository.findAll().forEach(bookingList :: add);
        return bookingList.stream().map(bookingDaoToBookingModel).collect(Collectors.toList());
    }

    @Override
    public Booking getBooking(String id) {
        return bookingDaoToBookingModel.apply(bookingRepository.findById(id).orElseGet(()->BookingDao.builder().build()));
    }

    @Override
    public Booking addBooking(Booking booking) {
        BookingDao bookingDao = bookingRepository.save(bookingModelToBookingDao.apply(booking));
        return bookingDaoToBookingModel.apply(bookingDao);
    }

    @Override
    public Booking updateBooking(Booking booking) {
        BookingDao bookingDao = bookingRepository.save(bookingModelToBookingDao.apply(booking));
        return bookingDaoToBookingModel.apply(bookingDao);
    }

    @Override
    public void deleteBooking(String id) {
        bookingRepository.deleteById(id);
    }
}
