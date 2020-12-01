package github.opendesk.bookingservice.converter;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.Booking;

import java.util.function.Function;

public class BookingConverter {

    public static Function<BookingDao, Booking> bookingDaoToBookingModel
            = bookingDao -> Booking.builder()
                    .userId(bookingDao.getUserId())
                    .siteId(bookingDao.getSiteId())
                    .bookingDate(bookingDao.getBookingDate())
                    .bookingId(bookingDao.getBookingId())
                    .bookingTime(bookingDao.getBookingTime())
                    .floorId(bookingDao.getFloorId())
                    .orgId(bookingDao.getOrgId())
                    .deskId(bookingDao.getDeskId())
                    .build();

    public static Function<Booking, BookingDao> bookingModelToBookingDao
            = booking -> BookingDao.builder()
                    .userId(booking.getUserId())
                    .siteId(booking.getSiteId())
                    .bookingDate(booking.getBookingDate())
                    .bookingId(booking.getBookingId())
                    .bookingTime(booking.getBookingTime())
                    .floorId(booking.getFloorId())
                    .deskId(booking.getDeskId())
                    .orgId(booking.getOrgId()).build();
}
